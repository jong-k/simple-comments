# 컴포넌트 import, export

## 1. default exports vs named exports

<table border="1">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Default Exports</th>
      <th>Named Exports</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td border="1">Export 방식</td>
      <td>파일 당 하나의 default export만 가능</td>
      <td>여러 named export가 가능</td>
    </tr>
    <tr>
      <td>Import 방식</td>
      <td>imported 이름을 자유롭게 정할 수 있음</td>
      <td>export된 이름 그대로 사용해야 함</td>
    </tr>
    <tr>
      <td>사용 사례</td>
      <td>모듈 전체를 하나의 객체나 함수로 표현할 때 유리</td>
      <td>모듈 내 여러 기능이나 객체를 개별적으로 제공할 때 유리</td>
    </tr>
    <tr>
      <td>구문 예시</td>
      <td><code>export default MyFunction;</code></td>
      <td><code>export { MyFunction, MyVariable };</code></td>
    </tr>
    <tr>
      <td>호환성</td>
      <td>CommonJS 모듈과의 호환성이 더 좋음</td>
      <td>ES6 모듈 시스템과 일관된 사용이 가능</td>
    </tr>
  </tbody>
</table>
