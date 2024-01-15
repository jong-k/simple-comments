# 컴포넌트에 props 전달하기

## 1. props
- 객체, 배열, 함수 등 모든 JavaScript 값을 props로 전달 가능
- HTML 어트리뷰트처럼 각 태그에 속하는 props가 정해져 있음
  - 예) `<img/>` 에는 `alt`, `width`, `height` 등..

## props의 기본값 설정


## challenges
### 1. 컴포넌트 추출
과제
- [x] `Profile` 컴포넌트 따로 분리하기

### 2. props 만들기
과제
- [x] `Avatar` 컴포넌트 만들기
- [x] Avatar 컴포넌트에 이미지 크기 조정을 위한 `size` props 만들기
- [x] size < 90: getImageUrl 함수에 "s" 전달
- [x] size >= 90: "b" 전달