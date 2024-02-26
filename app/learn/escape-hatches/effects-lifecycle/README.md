# Effect 라이프사이클

- effect 는 외부 시스템을 현재 props 및 state 와 동기화한다
  - state 나 props 가 변경되면 여기에 맞춰
- effect 라이프사이클 대신 컴포넌트 라이프사이클에 초점을 맞추는 것이 좋다

### 컴포넌트 라이프사이클과 effect

1. Mount: 컴포넌트가 화면에 추가될 때 -> UI 표시되면 effect 동기화 시작
2. Update: 컴포넌트의 props나 state가 변경될 때 -> effect 동기화가 여러번 발생할 수 있음
3. Unmount: 컴포넌트가 화면에서 제거될 때 -> effect 동기화 중지

- useEffect 내부에서 cleanup 함수를 명시하지 않는 경우, 빈 cleanup 함수를 반환하는 것처럼 동작한다

### Effect 동기화가 2번 이상 수행되어야 하는 이유

채팅 앱에서 채팅방을 바꿔 입장하는 예제
1. roomId: "general"
2. roomId: "travel"

```jsx
const serverUrl = "https://localhost:1234";

// 1-1. 최초 roomId 가 general 로 정해져 일반 채팅방 입장
// 2-1. roomId: general -> travel 변경 발생
function ChatRoom({ roomId /* "general" */ }) {
  useEffect(() => {
    // 1-3. 동기화 시작 -> "general" 방에 연결
    // 2-4. 동기화 시작 -> 새 roomId "travel" 방에 연결
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    // 2-3. 동기화 중단 (cleanup) -> "general" 방에서 연결 해제
    return () => {
      connection.disconnect();
    };
  }, [roomId]);
  // ...

  // 1-2. "general" 채팅방 UI 표시
  // 2-2. "travel" 채팅방 UI 표시
  return <h1>Welcome to the {roomId} room!</h1>;
  // -> 사용자가 다른 화면으로 이동하면 컴포넌트 unmount 후 마지막으로 effect 동기화 중단 (cleanup)
}
```

### Effect 관점에서 ChatRoom 컴포넌트 재해석
ChatRoom 컴포넌트 라이프사이클 변화
1. mount: roomId = "general"
2. update: roomId = "travel"
3. update: roomId = "music"
4. unmount

effect 라이프사이클 변화 (동기화 & 중단)
1. effect(roomId = "general" 동기화)
2. cleanup(roomId = "general" 중단) & effect(roomId = "travel" 동기화)
3. cleanup(roomId = "travel" 중단) & effect(roomId = "music" 동기화)
4. cleanup(roomId = "music" 중단)

- 이 때, roomId(의존성 배열 원소)는 `Object.is` 메서드로 비교됨

### strict mode(development 환경)에서의 Effect
- 각 컴포넌트를 한번씩 다시 mount 하여 useEffect 의 의존성 배열이 비었더라도 2번 실행됨
  - mount(effect!) -> unmount -> mount(effect!)
  - cleanup 이 잘 동작하는지 확인하기 위함

### 의존성 배열
반응형 값
- 의존성 배열에는 반응형 값(`props`, `state` 및 `렌더링중 재계산되는 값들`)을 전부 포함해야 함
- `컴포넌트 본문에 선언된 모든 변수`는 반응형에 해당하므로 의존성 배열에 추가하는 것이 원칙임
  - 단, 객체와 함수는 의존성으로 사용하면 안됨 (렌더링 중에 새로 선언되므로 effect가 의미없이 재실행됨)

반면 변경할 수 있는 값(전역 변수 포함)은 반응형이 아니다
- 의존성 배열에 넣을 수 없는 값 예시
- `location.pathname`: React 렌더링 데이터 흐름 외부에서 언제든지 변경 가능
- `ref.current`: 의도적으로 변경 가능할 뿐더러 변경해도 리렌더링이 트리거되지 않음

생략 가능한 경우: 리렌더링해도 변경되지 않음이 보장됨
- setState 함수
- ref 객체

lint 도구의 도움을 받아 적절한 의존성 배열을 사용할 수 있다
- eslint-ignore 는 제한적으로 사용해야 하며, eslint-ignore 를 사용하기 전에 의존성에 넣을 필요가 없도록 조치하는 것이 좋다

