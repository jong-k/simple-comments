# 커스텀 Hook으로 로직 재사용하기

## Hook 생성 규칙

- Hook의 이름은 항상 `use` + 대문자로 시작해야 한다
  - 내부에서 적어도 1개 이상의 내장 Hook을 사용하는 경우 일반 함수 대신 Hook으로 만들어야 한다
  - 커스텀 Hook이 내부적으로 내장 Hook을 사용하지 않는다면, 일반 함수로 변경해야 한다
- 참고로 컴포넌트의 이름은 항상 대문자로 시작해야 한다

## 커스텀 Hook은 state 그 자체를 공유하는게 아닌 state 저장 로직을 공유하도록 한다

- 같은 Hook을 호출하더라도 각각의 Hook 호출은 완전히 독립되어 있다
- 여러 컴포넌트 간 state 자체를 공유해야 한다면, state를 위로 올려 전달해야 한다

## Hook 사이에 상호작용하는 값 전달하기

- 커스텀 Hook 안의 코드(effect 포함)는 리렌더링 시 재호출된다
- 또한 가장 최신의 props와 state를 전달받는다
  - 그리고 커스텀 Hook 내부의 effect가 props나 state를 의존성으로 갖고 있다면, 재실행된다

## 커스텀 Hook에 이벤트 핸들러 넘겨주기

> useEffectEvent Hook은 experimental API 이므로 아직 안정화버전에 반영 X

Effect에서 사용하고 싶은 이벤트 핸들러가 있는데, 의존성에서는 제거해야 할 때 `useEffectEvent` Hook 을 사용할 수 있다

- 아래 처럼 커스텀 Hook에서 이벤트 핸들러를 인수로 받아서 사용한다고 가정하면,

```jsx
export default function ChatRoom({ roomId }) {
 const [serverUrl, setServerUrl] = useState('https://localhost:1234');

 useChatRoom({
   roomId: roomId,
   serverUrl: serverUrl,
   // ✅ 커스텀 Hook 에서 이벤트 핸들러를 인수로 받음
   onReceiveMessage(msg) {
     showNotification('New message: ' + msg);
   }
 });
 // ...
```

- 커스텀 Hook 내부의 Effect 에서 이벤트 핸들러를 의존성에 추가해야 한다 (매개변수는 반응형 값이므로)

```jsx
// 변경 전 useChatRoom 커스텀 Hook
export function useChatRoom({ serverUrl, roomId, onReceiveMessage }) {
  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    connection.connect();
    connection.on("message", (msg) => {
      onReceiveMessage(msg);
    });
    return () => connection.disconnect();
    // 이벤트 핸들러 함수 값이 바뀌면 불필요하게 채팅방에 재연결됨
  }, [roomId, serverUrl, onReceiveMessage]); // ✅ 모든 의존성이 정의됨.
}
```

- 하지만 이 코드에서 onReceiveMessage 이벤트 핸들러는 함수이기 때문에 매 렌더링마다 값이 달라지고, 이는 불필요한 Effect 재실행을 유발한다
- 의존성에서 제거하기 위해 `useEffectEvent` 로 감싸준다

```jsx
// 변경 후 useChatRoom 커스텀 Hook
import {
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
} from "react";
// ...

export function useChatRoom({ serverUrl, roomId, onReceiveMessage }) {
  const onMessage = useEffectEvent(onReceiveMessage);

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    connection.connect();
    connection.on("message", (msg) => {
      onMessage(msg);
    });
    return () => connection.disconnect();
  }, [roomId, serverUrl]); // ✅ 모든 의존성이 정의됨.
}
```

- 이제 부모 컴포넌트(ChatRoom 컴포넌트)가 리렌더링되어도 커스텀 Hook의 Effect가 재실행되지 않음(채팅방에 재연결되지 않음)

## 언제 커스텀 Hook을 사용해야 하는지
- 기본적으로 Effect는 로직에 따라 분리하는 것이 옳다
  - 예) 나라 이름 리스트 불러오는 Effect, 도시 이름 리스트 불러오는 Effect 분리
- 컴포넌트에서 커스텀 훅을 통해 로직(Effect)를 숨기면, 추후 팀원들이 컴포넌트에 불필요한 의존성을 추가하는 것을 막을 수 있다
- 기본적으로 useEffect는 도피구이므로 최소화하여 사용하는 것이 좋다(React에서 잠깐 벗어나는 것이기 때문에)

## 커스텀 Hook으로 Effect를 감싸는 것이 종종 유용한 이유
- 매우 명확하게 Effect로 주고받는 데이터 흐름을 만들 때
- 컴포넌트가 Effect의 정확한 실행보다 목적에 집중하도록 할 때
- React가 새 기능을 추가할 때, 다른 컴포넌트의 변경 없이 이 Effect를 삭제할 수 있을 때