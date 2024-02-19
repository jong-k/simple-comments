# Ref로 값 참조하기

> 컴포넌트가 렌더링을 유발하지 않는 일부 정보를 기억하고 싶게 할 때

## useRef
- useRef 훅으로 ref 객체를 만들면, 반환값은 아래 객체와 같다

```jsx
const ref = useRef(0); // ref.current 에는 state 처럼 모든 값을 담을 수 있다

/*
{
  current: 0 // useRef에 전달한 값 
}
 */
```

- React는 기본적으로 단방향 데이터 흐름이지만, ref 객체의 current 값을 통해 `탈출구` 기능을 수행한다

## ref와 state의 차이
### 리렌더링
- ref: ref.current를 바꿔도 리렌더링 X
- state: state를 바꾸면 리렌더링

### mutable
- ref: mutable: 렌더링 프로세스 외부에서 ref.current 값을 수정 가능
- state: immutable: set state 함수를 사용하여 리렌더 대기열에 추가해야만 수정 가능

### 값 참조
- ref: 렌더링 중에 ref.current 값을 읽거나 쓰면 안됨
- state: 언제든지 state 값 참조 가능
  - 단, 각 렌더링마다 변경되지 않는 state 스냅샷 존재