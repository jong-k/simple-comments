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
