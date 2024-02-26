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
- 