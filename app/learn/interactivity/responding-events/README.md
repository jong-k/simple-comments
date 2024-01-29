# 이벤트에 응답하기

## 1. 이벤트 핸들러 추가하기
이벤트 핸들러
- 클릭, 마우스 호버, 등 사용자 상호작용에 따라 유발되는 커스텀 함수
- 주로 컴포넌트 내부에서 정의
- 관습적으로 `handle` 뒤에 이벤트 명을 붙여서 작명
  - 이벤트 핸들러 props의 경우 관습적으로 `on` 뒤에 이벤트 명(대문자 시작)을 붙여서 작명

## 2. 이벤트 핸들러를 props로 전달하기
- 특히 디자인 시스템을 적용할 때, `<Button />` 컴포넌트를 만들었다면, 스타일만 지정하고 동작은 지정하지 않는다
- `<PlayButton />` 와 같은 컴포넌트를 만들어 이벤트 핸들러를 전달하도록 한다
- 예시: `Toolbar` 컴포넌트

## 3. 이벤트 핸들러를 적합한 HTML 태그에 전달하기
- 웹 접근성을 위해서 올바른 HTML 태그를 사용해야 함
  - `<div onClick={handleClick}>` X
  - `<button onClick={handleClick}>` O
- 버튼 태그의 기본 스타일링을 바꾸고 싶다면 CSS를 활용해야 함

## 4. 이벤트 전파
- 이벤트는 발생 지점에서 시작해서 렌더 트리를 따라 위로 전달됨(`bubbling`, `propagation`)
- 따라서 이벤트 핸들러는 어떤 자식 컴포넌트의 이벤트를 `catch`할 수 있음
- JSX 에서는 `onScroll` 을 제외한 모든 이벤트가 전파됨

이벤트 전파를 막으려면
- `e.stopPropagation()` 을 통해 이벤트 버블링 방지 가능(부모컴포넌트에 닿지 못하게 막을 수 있음)

## 5. 이벤트 캡쳐
- 이벤트 전파가 중단된 상황에서 모든 이벤트를 확인해야 할 때 사용
- 이벤트 명 마지막에 `Capture` 추가

```jsx
<div onClickCapture={() => { /* this runs first */ }}>
  <button onClick={e => e.stopPropagation()} />
  <button onClick={e => e.stopPropagation()} />
</div>
```

이벤트 단계
1. 아래로 전달되며 모든 `onClickCaputre` 핸들러 호출
2. 클릭된 요소의 onClick 핸들러 실행
3. onClick 이벤트 버블링

이벤트 캡처는 라우터나 분석을 위한 코드에 유용할 수 있지만 일반 애플리케이션 코드에서는 사용하지 않을 가능성이 높습니다.

## 6. 기본 동작 방지하기
- `e.preventDefault()` 를 통해 기본 이벤트 동작을 방지할 수 있음
- e.g. form event의 경우 전체 페이지 리로드