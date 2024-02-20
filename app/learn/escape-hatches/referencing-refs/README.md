# Ref로 값 참조하기

> 컴포넌트가 렌더링을 유발하지 않는 일부 정보를 기억하고 싶게 할 때

## useRef
- useRef 훅으로 ref 객체를 만들면, 반환값은 아래 객체와 같다
- ref 객체는 읽고 쓸 수 있는 current 프로퍼티를 지닌 자바스크립트 객체이다
- state 와 마찬가지로 렌더링 간에 정보를 유지할 수 있다

```jsx
const ref = useRef(0); // ref.current 에는 state 처럼 모든 값을 담을 수 있다

/*
{
  current: 0 // useRef에 전달한 값 
}
 */
```

- React는 기본적으로 단방향 데이터 흐름이지만, ref 객체의 current 값을 통해 `비상 탈출구` 기능을 수행한다

## ref와 state의 차이
### 리렌더링
- ref: ref.current를 바꿔도 리렌더링 X
- state: state를 바꾸면 리렌더링

### mutable
- ref: mutable: 렌더링 프로세스 외부에서 ref.current 값을 수정 가능
  - 동기적 변경
- state: immutable: set state 함수를 사용하여 리렌더 대기열에 추가해야만 수정 가능
  - 비동기적 변경

### 값 참조
- ref: 렌더링 중에 ref.current 값을 읽거나 쓰면 안됨
- state: 언제든지 state 값 참조 가능
  - 단, 각 렌더링마다 변경되지 않는 state 스냅샷 존재

## ref를 사용할 시기: 외부 시스템이나 브라우저 API 작업 시
- timeout id 저장
- DOM 엘리먼트 저장 및 조작
- JSX를 계산하는데 필요하지 않은 다른 객체 저장

## ref의 좋은 예시
- ref를 `비상 탈출구`로 간주한다
  - 애플리케이션 로직과 데이터 플로우 상당 부분이 ref에 의존한다면 접근방식을 개선할 필요가 있다
- 렌더링 중에 ref.current를 참조하지 않는다
  - ref.current의 변화를 완벽하게 예측하기 힘들기 때문에
  - 최초 렌더링에서만 사용하려면 `if (!ref.current) ref.current = new Thing()` 처럼 사용하자