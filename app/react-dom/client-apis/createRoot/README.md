# createRoot

> 브라우저 DOM 노드 안에 React 컴포넌트를 표시하는 루트 생성

## 레퍼런스

### createRoot(domNode, options?)

createRoot 를 호출하면 브라우저 DOM 엘리먼트 안에 콘텐츠를 표시할 수 있는 React 루트를 생성한다

```jsx
import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
```

루트를 생성하면 render 함수를 호출해 그 안에 React 컴포넌트를 표시한다

```jsx
root.render(<App />);
```

일반적인 앱에서는 루트 컴포넌트에 대한 createRoot 호출이 하나만 존재하지만, 페이지의 일부에 React를 뿌려서 사용하는 페이지의 경우, 루트를 여러개 작성할 수 있다

주의사항

- 앱이 SSR 방식인 경우, createRoot 사용 불가
  - 대신, hydrateRoot 사용해야 함
- 일반적으로 앱에 createRoot 호출이 단 하나만 있을 가능성이 높다
  - 프레임워크를 사용하는 경우, 프레임워크가 이 호출을 대신 수행할 수 있다
- 컴포넌트의 자식이 아닌 DOM 트리의 다른 부분(예-모달 or 툴팁)에 JSX 조각을 렌더링하려는 경우, createRoot 대신 createPortal 을 사용한다

### root.render(reactNode)

root.render 함수를 호출하여 JSX 조각(React 노드)을 React 루트의 브라우저 DOM 노드에 표시

```jsx
root.render(<App />);
```

매개변수

- reactNode
  - createElement로 작성한 React 엘리먼트
  - 문자열
  - 숫자
  - null
  - undefined 를 전달할 수도 있다

주의사항

- root.render 를 처음 호출하면 React는 React 컴포넌트를 렌더링하기 전에 React 루트 내부의 모든 기존 HTML 콘텐츠를 지운다
- 동일한 루트에서 render 를 2번 이상 호출하면, 필요에 따라 DOM을 업데이트 (할 수도 있고, 안 할 수도 있음)
  - 항상 사용자가 전달한 최신 JSX를 반영
  - React는 불필요한 DOM 업데이트를 피함

### root.unmount

React 루트 내부에서 렌더링된 트리를 삭제

```jsx
root.unmount();
```

- 온전히 React 만으로 작성된 앱에는 일반적으로 root.unmount 호출이 없음
- root.unmount 를 호출하면 루트에 있는 모든 컴포넌트가 unmount되고, 트리상의 이벤트 핸들러나 state가 제거되며, 루트 DOM 노드에서 React가 분리됨
- root.unmount 를 한 번 호출한 후에는 같은 루트에서 재호출 불가
  - 새로운 루트를 만들 수는 있음

## 사용법

### 온전히 React로 만들어진 앱 렌더링

전체 앱에 대한 단일 루트 생성

```jsx
// index.js
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

```html
<!-- index.html -->
<!doctype html>
<html>
  <head>
    <title>My app</title>
  </head>
  <body>
    <!-- This is the DOM node -->
    <div id="root">
      
    </div>
  </body>
</html>
```

- 이 코드는 시작할 때 1번만 실행하면 됨
- 추가적인 루트를 더 만들거나 root.render를 재호출할 필요 없음

처음에 등장하는 index.html 에서는 JS 코드가 로드되고 실행될 때까지 사용자에게 빈 페이지가 표시됨

- 이 문제를 해결하기 위해, 서버에서 또는 빌드중에 초기 HTML을 생성할 수 있음
  - SSR, SSG
  - 이 경우, hydrateRoot 를 호출해야 함

### React로 부분적으로 작성된 페이지 렌더링

여러 개의 루트를 만들 수 있다

```jsx
// index.js
import "./styles.css";
import { createRoot } from "react-dom/client";
import { Comments, Navigation } from "./Components.js";

const navDomNode = document.getElementById("navigation");
const navRoot = createRoot(navDomNode);
navRoot.render(<Navigation />);

const commentDomNode = document.getElementById("comments");
const commentRoot = createRoot(commentDomNode);
commentRoot.render(<Comments />);
```

```html
<!-- index.html -->
<!doctype html>
<html>
  <head>
    <title>My app</title>
  </head>
  <body>
    <nav id="navigation"></nav>
    <main>
      <p>
        This paragraph is not rendered by React (open index.html to verify).
      </p>
      <section id="comments"></section>
    </main>
  </body>
</html>
```
