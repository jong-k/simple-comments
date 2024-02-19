# State를 보존하고 초기화하기

## State 는 렌더트리의 위치에 연결 됩니다

- 예시) `DoubleCounter.tsx`
- 컴포넌트가 렌더트리에서 제거되면, 상태도 함께 제거된다
- 따라서, 2번째 Counter 를 지웠다가 다시 렌더링시키면, 카운터 숫자 state가 기본값으로 초기화된다

## 같은 자리의 같은 컴포넌트는 state를 보존합니다

- 예시) `FancyCounter.tsx`
- `<div>` 의 1번째 자식 컴포넌트라는 것이 변하지 않는다면 (컴포넌트의 위치가 바뀌지 않으면) state는 보존된다
- 여기서 `위치`는 JSX 마크업이 아닌, UI 트리에서의 위치를 의미한다

## 같은 위치의 다른 컴포넌트는 state를 초기화합니다

- 예시) `ChildrenFancyCounter.tsx`
- 같은 위치에서 컴포넌트가 바뀌면, state는 초기화된다
- 기존 컴포넌트가 제거될 때 자식 컴포넌트가 있었다면, 하위의 모든 자식 컴포넌트들도 제거된다 (마찬가지로 state도 초기화된다)

## 컴포넌트 내부에서 다른 컴포넌트를 정의하면 안되는 이유

- 컴포넌트1이 상태 A 및 내부에서 컴포넌트2를 정의하고 있다고 가정한다
- 이 때, 컴포넌트2는 상태 A를 바꾸는 버튼을 갖고 있다고 할때,
- 컴포넌트2의 버튼을 클릭하여 상태 A를 바꾸게 되면, 컴포넌트2도 재정의되며(메모리 주소 달라짐) 컴포넌트2가 갖던 상태가 초기화된다
- 따라서 컴포넌트는 항상 최상위 범위에서 정의해야 한다

## 같은 위치에서 state를 초기화하기
### 방법 1. 다른 위치에 컴포넌트를 렌더링하기
- 1번째 위치, 2번째 위치에 각각 렌더링
- `isPlayerA` 일때, `!isPlayerA` 일때 의 완전히 다른 표현식이므로 다른 위치로 인식된다

```jsx
import { useState } from 'react';

export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA &&
        <Counter person="Taylor" />
      }
      {!isPlayerA &&
        <Counter person="Sarah" />
      }
      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
        Next player!
      </button>
    </div>
  );
}
```

- 아래처럼 동일한 위치이면 state가 보존된다
```jsx
import { useState } from 'react';

export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {/* 동일한 위치로 인식됨 */}
      <Counter person={isPlayerA ? "Taylor" : "Sarah"} />
      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
        Next player!
      </button>
    </div>
  );
}
```

### 방법 2. key를 이용해 state를 초기화하기
- `key` 를 활용해 두 컴포넌트를 구분할 수 있다
  - `key`는 부모 컴포넌트 내에서만 유일하면 된다
- 같은 위치에 나타나지만, state를 공유하지 않는다
- key가 바뀌면, 하위 트리가 전부 초기화된다

```jsx
import { useState } from 'react';

export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA ? (
        <Counter key="Taylor" person="Taylor" />
      ) : (
        <Counter key="Sarah" person="Sarah" />
      )}
      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
        Next player!
      </button>
    </div>
  );
}
```

## 챌린지1: 입력 문자열이 사라지는 것 고치기

## 챌린지2: 두 필드 맞바꾸기

## 챌린지5: 배열에서 잘못 지정된 state 고치기