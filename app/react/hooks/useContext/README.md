# useContext
> 컴포넌트에서 context를 읽고, 구독할 수 있는 Hook

## 정리
매개변수
- `createContext` 메서드로 생성한 `context`

반환값
- context 값 반환
  - `useContext` 를 호출하는 현재 컴포넌트의 (렌더링 트리 상) 가장 가까운 `상위` SomeContext.Provider 에 전달될 value로 결정됨
  - Provider가 없으면, createContext 호출 시의 기본값이 반환됨
- 항상 최신값이 반환됨을 보장 (context가 변경되면 context를 읽는 모든 컴포넌트를 리렌더링)
  - context 변경 기준은 `Object.is()` 메서드 사용
  - 중간에서 `memo` 를 통해 리렌더링을 스킵해도 context를 읽는 모든 컴포넌트는 리렌더링된다

- context를 업데이트하려면 state와 결합

fallback 기본값 지정
- Context Provider의 value props에 값을 전달하지 않으면 `createContext` 메서드를 사용할 때 전달한 기본값이 context 기본값이 된다

트리의 일부 context 오버라이딩
- 트리의 일부분을 다른 값의 provider로 감싸서 context를 오버라이딩 가능
- 예시

```jsx
<ThemeContext.Provider value="dark">
  ...
  <ThemeContext.Provider value="light">
    <Footer />
  </ThemeContext.Provider>
  ...
</ThemeContext.Provider>
```

성능 최적화
- context provider에 함수를 전달한다고 가정할 때, 컴포넌트가 리렌더링되면 함수 메모리 주소가 바뀌어 context value가 바뀐 것으로 인식되어, context를 구독하는 컴포넌트가 리렌더링될 수 있다
- 이 때, `useCallback`으로 래핑하면 불필요한 리렌더링을 막을 수 있다 (값의 경우 useMemo 사용)

## 예제
### 1) 이름과 테마를 다루는 context
과제
- [x] 테마 context(다크/라이트) 읽고 구독하기
  - ThemeContext 만들기
- [x] user state와 setState 함수를 객체 리터럴로 context에 담기
  - UserContext 만들기
- [x] Provider 래퍼 컴포넌트 분리

### 2) context provider 중첩하여 정보 누적하기
과제
- [x] 바로 위의 Provider에서 context를 받아 새로 Provider에 값을 +1 해서 전달하기
  - Section 컴포넌트 만들기 
  - Heading 컴포넌트 만들기