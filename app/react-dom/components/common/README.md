# 공통 컴포넌트
> e.g. <div> 처럼 모든 내장 브라우저 컴포넌트는 공통의 props와 이벤트를 지원한다

## 공통 props
```jsx
<Sample>
  {children}
</Sample>
```
### children
- React 노드: React.Node
  - 엘리먼트
  - 문자열
  - 숫자
  - portal
  - null
  - undefined
  - boolean 타입과 같은 빈 노드<></>
  - React 노드로 이루어진 배열
  - 컴포넌트 내부의 콘텐츠 지정 innerContents

### dangerouslySetInnerHTML
- DOM 노드의 innerHTML 프로퍼티를 덮어쓰고 전달된 HTML을 내부에 표시
- XSS 공격에 취약
- children과 동시 사용 불가
- 예시
```jsx
const markup = { __html: '<p>some raw html</p>' };
return <div dangerouslySetInnerHTML={markup} />;
```
### ref
- ref 객체, ref 콜백 함수 등
- ref 콜백 함수
  - 예) `<div ref={(node) => console.log(node)} />`
  - `<div>` 노드가 화면에 추가될 때, node를 인수로 ref 콜백이 호출됨
  - 그리고 이 `<div>` 노드가 제거되면 null이 인수로 ref 콜백을 호출됨
### suppressContentEditableWarning
- boolean 타입
  - true: 일반적으로 같이 사용하지 않는 `children` props와 `contentEditable={true}` 가 모두 존재하는 엘리먼트에 대해 경고하지 않음
  - 콘텐츠를 수동으로 관리하는 텍스트 입력 라이브러리를 빌드할 때 사용됨
### style
- camelCase로 작성
- 문자열이나 숫자를 값으로 전달 가능
  - 이 때, 단위가 없는 프로퍼티가 아니면 px을 자동으로 추가
  - 동적 스타일링 시에만 사용하는 것을 권장
    - 일반 CSS가 더 효율적이기 때문

### 이외의 표준 DOM props
- 예) className, htmlFor 등등 [공식문서](https://react.dev/reference/react-dom/components/common)

### 주의사항
- 일부 이벤트(예시: onAbort, onLoad)는 브라우저에서 버블링이 발생하지 않지만, React에서는 버블링이 발생

## React Event 객체
이벤트 핸들러는 React Event(synthetic event - 합성 이벤트) 를 매개변수로 받음
- 기본 브라우저 이벤트가 필요할 경우 `e.nativeEvent` 사용

```jsx
<button onClick={e => {
  console.log(e); // React event object
}} />
```

### 프로퍼티
- currentTarget: 이벤트 핸들러가 부착된 DOM 노드 반환
- target: 이벤트가 발생한 DOM 노드 반환

### 메서드
- preventDefault(): 이벤트에 대한 기본 브라우저 동작 방지
  - form submit -> refresh
- stopPropagation(): React 트리를 통한 이벤트 전파 중지

### 기타 Event
AnimationEvent: CSS 애니메이션 이벤트
- onAnimationStart
- onAnimationIteration
- onAnimationEnd

ClipboardEvent: 클립보드 API 이벤트
- onCopy
- onCut
- onPaste

DragEvent: HTML 드래그 앤 드롭 API 이벤트
- 상속된 MouseEvent 프로퍼티도 포함
```jsx
<>
  <div
    draggable={true}
    onDragStart={e => console.log('onDragStart')}
    onDragEnd={e => console.log('onDragEnd')}
  >
    Drag source
  </div>

  <div
    onDragEnter={e => console.log('onDragEnter')}
    onDragLeave={e => console.log('onDragLeave')}
    onDragOver={e => { e.preventDefault(); console.log('onDragOver'); }}
    onDrop={e => console.log('onDrop')}
  >
    Drop target
  </div>
</>
```

등등...

## style 적용
style 어트리뷰트에 일반 객체를 전달하여 style 적용

### 여러 CSS 클래스를 조건부로 적용하려면
JavaScript를 사용하여 className 문자열을 직접 생성해야 함
- 예) `className={"row " + (isSelected ? "selected" : "")}`
- 가독성을 높이기 위해 classnames 같은 헬퍼 라이브러리 사용 가능

```jsx
import cn from 'classnames';

function Row({ isSelected, size }) {
  return (
    <div className={cn('row', {
      selected: isSelected,
      large: size === 'large',
      small: size === 'small',
      // row selected large small
    })}>
      ...
    </div>
  );
}
```