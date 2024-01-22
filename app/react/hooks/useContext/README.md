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

## 예제
### 1) 이름과 테마를 context
과제
- [x] 테마 context(다크/라이트) 읽고 구독하기
  - ThemeContext 만들기
- [x] user state와 setState 함수를 객체 리터럴로 context에 담기
  - UserContext 만들기
- [x] Provider 래퍼 컴포넌트 분리

