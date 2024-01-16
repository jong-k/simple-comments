# 컴포넌트에 props 전달하기

## 1. props
- 객체, 배열, 함수 등 모든 JavaScript 값을 props로 전달 가능
- HTML 어트리뷰트처럼 각 태그에 속하는 props가 정해져 있음
  - 예) `<img/>` 에는 `alt`, `width`, `height` 등..
  - ReactDOM은 HTML 표준을 준수

## 2. props 기본값
- JS 함수의 매개변수 기본값과 동일하게 작동
  - 매개변수(props) 를 전달하지 않거나
  - `undefined`가 전달될 때
- `null` 이나 `0`을 전달하면 기본값이 활성화되지 않음 (값이 전달된 것으로 봄)

## 3. 스프레드 연산자로 props 전달하기
- 가독성을 희생해서 간결함을 얻기 때문에 `제한적으로` 사용
```jsx
// function Profile(props) {
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      {/*  <Avatar {...props} /> */}
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

```

## 4. 시간에 따라 변하는 props
- props는 최초값이 아니라 모든 시점에 반영됨 (읽기 전용 스냅샷)
  - props가 바뀌면 컴포넌트가 리렌더링됨
- props는 (컴포넌트 내부에서) 변경할 수 없다
  - 컴포넌트 내부에서 변경이 필요한 상태의 경우 `state`(`setState` 함수와 함께) 를 사용해야 한다


## challenges
> Galley 컴포넌트
### 1) 컴포넌트 분리
과제
- [x] `Profile` 컴포넌트 따로 분리하기

### 2) props 만들기
과제
- [x] `Avatar` 컴포넌트 만들기
- [x] Avatar 컴포넌트에 이미지 크기 조정을 위한 `size` props 만들기
- [x] size < 90: getImageUrl 함수에 "s" 전달
- [x] size >= 90: "b" 전달

메모
- `window.devicePixelRatio`: 현재 디바이스의 디스플레이에서 선명한 화면을 나타낼 수 있는 정도
  - 1 ~ 2(레티나 디스플레이) 사이
  - 값이 높을 수록, 더 많은 픽셀을 사용하여 더 선명하게 화면에 표시할 수 있음

### 3) children props 사용
과제
- [x] Card 컴포넌트 분리
- [x] children props 만들고 다른 JSX 전달
