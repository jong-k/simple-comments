# Hooks
## Built-in React Hooks
### 1. State Hooks
> 컴포넌트가 정보를 기억하게 한다. e.g. 유저 입력값

- useState: 직접 변경할 수 있는 상태값을 선언
- useReducer: reducer 함수를 통해 업데이트할 수 있는 상태값을 선언

### 2. Context Hooks
> props를 사용하지 않고도 멀리 떨어진 부모 컴포넌트에서 정보를 받을 수 있다. e.g. theme 값

- useContext: context를 읽고, 구독할 수 있다

### 3. Ref Hooks
> 컴포넌트가 렌더링에 필요하지 않은 정보를 보관하게 한다. e.g. DOM node, timeout ID

- state와 다르게 ref를 변경해도 리렌더링을 유발하지 않는다
- React 패러다임에서 잠깐 빠져나올 수 있다. (built-in 브라우저 API 사용할 때 등등)

종류
- useRef: ref 객체를 선언한다. (주로 DOM node를 담는데 사용됨)
- useImperativeHandle: ref를 커스터마이즈하는데 사용되나 거의 쓰이지 않음

### 4. Effect Hooks
> 컴포넌트가 외부 시스템과 연결하고 동기화하게 한다. e.g. 네트워크, DOM, 애니메이션, 타 UI 라이브러리 위젯 등

- useEffect: 외부 시스템과 컴포넌트를 연결
  - 외부 시스템과 상호작용하지 않는다면, effect가 필요하지 않을 지도 모른다
- useLayoutEffect: 브라우저가 리페인트 하기 전에 발동된다. (레이아웃 계산 가능)
- useInsertionEffect: DOM을 바꾸기 전에 발동된다. (타사 라이브러리들이 동적 CSS를 삽입 가능)

### 5. Performance Hooks
> 불필요한 리렌더링을 생략하거나, 캐시된 연산을 재사용하게 한다

- useMemo: 비용이 큰 연산 결과(값)를 캐싱
- useCallback: 함수를 캐싱

blocking update, non-blocking update
- blocking update: `input에 타이핑하는 것` (UI에 즉각 반영 필요하므로 UI 중단)
- non-blocking update: `차트 업데이트` (변경을 위해 UI를 중단할 필요까지는 없다)

rendering 우선순위에 영향
- useTransition: state transition을 non-blocking하게 설정하여 다른 업데이트를 우선할 수 있음
- useDeferredValue: UI의 상대적으로 덜 중요한 부분(값)의 업데이트를 지연시킬 수 있음

### 6. Resource Hooks
> 컴포넌트가 state로 저장하지 않고도 Promise나 Context에서 값을 읽게 해준다

- use: Promise나 Context 에서 값을 읽게 한다

### 7. 기타
> 어플리케이션 코드보다는 라이브러리를 만드는데 주로 사용되는 훅들

- useDebugValue: 커스텀 훅에 대해 React dev tools에서 따로 표시 가능
- useId: 컴포넌트가 unique ID를 연결할 수 있게 한다 (주로 접근성 API와 함께 사용)
- useSyncExternalStore: 컴포넌트가 외부 스토어에 구독할 수 있게 한다