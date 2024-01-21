# useDeferredValue
> UI 업데이트를 지연시킬 수 있음

## 정리
매개변수
- 지연시키려는 값 (업데이트 됨)

반환값
- 초기 렌더링중에는 전달받은 값과 동일
- 업데이트될 때마다 우선 전달받은 최신 값으로 `백그라운드 리렌더링`시도 이후 확정되는 값
- 업데이트 비교는 `Object.is` 메서드를 활용 (=== 와 비슷)
- 백그라운드 리렌더링이 완료되지 않으면 Effect가 실행되지 않음

## 예제
### 1) 비틀즈 앨범 검색 UI
과제
- [x] Search 컴포넌트 (검색창UI) 만들기
- [x] SearchResults 컴포넌트 만들기
   - query 문자열을 props로 받아 data 파일에서 검색
   - 검색 후 데이터 존재 여부에 따라 검색 결과 반환
- [x] data 파일에 sample data와 fetcher 함수 만들기
- [x] `useDeferredValue` 훅을 사용하여 로딩 폴백 대신 이전 검색 결과를 띄우기
  - Loading... 메시지 대신 이전 검색 결과 표시

useDeferredValue 적용 결과
- input element의 query는 즉시 변하지만
- SearchResults에 전달되는 deferredQuery는 데이터가 로딩될 때 까지 이전 값을 유지

useDeferredValue 작동 원리
> 검색어 "a" 입력후 "ab" 를 입력할 때

- Search 컴포넌트는 query state가 "ab" 로 바뀜에 따라 리렌더링 시도
  - deferredQuery는 여전히 "a" 이므로 SearchResults 컴포넌트는 리렌더링되지 않음
- `백그라운드`에서는 query와 deferredQuery가 모두 "ab" 인 상황의 리렌더링 시도
  - `백그라운드 리렌더링`이 완료되면 (데이터 로드 완료) 화면에 바뀐 검색 결과가 표시됨
  - `백그라운드 리렌더링`은 데이터 로딩중에는 홀딩됨
- 백그라운드 리렌더링은 가장 최근에 제공받은 값을 사용하므로, query에 새 값이 들어오면 `useDeferredQuery`가 재실행됨

추가 과제
- [x] 콘텐츠가 오래되었음을 표시
  - query != deferredQuery 인 경우 css 효과 적용

### 2) 리렌더링 지연