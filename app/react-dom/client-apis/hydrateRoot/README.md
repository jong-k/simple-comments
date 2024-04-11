# hydrateRoot

> react-dom/server를 통해 사전에 만들어진 HTML로 그려진 브라우저 DOM 노드 내부에 React 컴포넌트를 렌더링

## 레퍼런스

### hydrateRoot(domNode, reactNode, options?)

동작 과정

1. 서버 환경에서 HTML(domNode) 생성
2. Hydration: hydrateRoot를 호출하여 뒤에 만들어진 React(reactNode)를 domNode에 부착

```jsx
import { hydrateRoot } from "react-dom/client";

const domNode = document.getElementById("root");
const root = hydrateRoot(domNode, reactNode);
```

매개변수

- domNode: 서버에서 root element로 렌더링된 DOM element
- reactNode: 앞서 존재하는 HTML에 렌더링하기 위한 React Node (JSX 조각)

반환값

- render 메서드, unmount 메서드가 포함된 객체

주의사항

- hydrateRoot()는 서버에서 렌더링된 내용과 후에 렌더링된 내용이 동일할 것을 기대
  - 개발 환경에서는 다른 부분에 대해 경고 표시됨
  - 따라서 동일하지 않은 부분들은 직접 버그로 취급해주거나 고쳐줘야 함
  - 모든 마크업을 일일이 비교하는 것은 비용이 큰 작업이기 때문
- 일반적으로 hydrateRoot() 는 1번만 호출됨
- 사전에 렌더링된 HTML이 없다면 hydrateRoot() 대신 createRoot() 를 사용해야 한다

### root.render(reactNode)

hydrate된 react root의 내부 컴포넌트를 새로운 React 컴포넌트로 갱신

주의사항

- hydrate 가 끝나기 전에 root.render 를 호출하면, 서버에서 렌더링된 HTML이 모두 없어지고 클라이언트에서 렌더링된 컴포넌트들로 교체

### root.unmount()

root 하위에 렌더링된 React 트리를 삭제

- 온전히 React 만으로 작성된 앱에는 일반적으로 root.unmount 호출이 없음
- 온전히 React 만으로 작성된 앱에는 일반적으로 root.unmount 호출이 없음
- root.unmount 를 호출하면 루트에 있는 모든 컴포넌트가 unmount되고, 트리상의 이벤트 핸들러나 state가 제거되며, 루트 DOM 노드에서 React가 분리됨
- root.unmount 를 한 번 호출한 후에는 같은 루트에서 재호출 불가
  - Cannot update an unmounted root 에러 발생

## 사용 예시

### 서버에서 렌더링된 HTML을 hydrate 하기

서버에서 만든 HTML의 root element에 App (React 컴포넌트) 를 부착하여 hydrate

```jsx
import { hydrateRoot } from "react-dom/client";

hydrateRoot(document.getElementById("root"), <App />);
```

주의사항

- hydrateRoot 에 전달한 React 트리와 서버에서 만든 React 트리의 결과물이 동일해야 함
  - 그렇지 않으면 Hydration Error 발생
- Hydration Error 의 주된 원인
  - 추가적인 공백 (새 줄)
  - `typeof window !== undefined` 같은 조건을 렌더링 로직에서 사용
  - `window.matchMedia` 같은 브라우저에서만 사용 가능한 API를 렌더링 로직에 사용
  - 서버와 클라이언트에서 서로 다른 데이터 렌더링

### document 전체를 hydrate 하기

`<html>` 태그를 포함한 전체 JSX 를 전체 document에 렌더링할 수 있다

```jsx
import { hydrateRoot } from "react-dom/client";
import App from "./App.js"; // <html> 로 래핑된 JSX

hydrateRoot(document, <App />);
```

### 어쩔 수 없는 hydration 불일치 에러 억제하기

- 예를 들어 timestamp 를 이용하여 서버와 클라이언트가 다른 UI를 갖게될 수 있다
- `suppressHydrationWarning={true}` props를 활용하여 hydration 경고를 끌 수 있다

```jsx
export default function App() {
  return (
    <h1 suppressHydrationWarning={true}>
      Current Date: {new Date().toLocaleDateString()}
    </h1>
  );
}
```

### 서버와 클라이언트에서 서로 다른 내용을 렌더링하기

useEffect를 이용하여 초기에는 서버와 같은 내용을 렌더링하고, hydration 이후 새로운 결과물을 동기적으로 렌더링한다

```jsx
import { useState, useEffect } from "react";

export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <h1>{isClient ? "Is Client" : "Is Server"}</h1>;
}
```
