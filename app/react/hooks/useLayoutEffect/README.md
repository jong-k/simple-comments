# useLayoutEffect
> 리페인팅 전에 실행되는 useEffect, 성능 저하 리스크가 있으므로 제한적으로 사용해야 함

## useEffect와의 비교

<table>
    <thead>
        <tr>
            <th>특징</th>
            <th>useEffect</th>
            <th>useLayoutEffect</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>실행 시점</td>
            <td>컴포넌트 렌더링이 화면에 반영된 후 비동기적으로 실행</td>
            <td>컴포넌트 렌더링이 화면에 반영되기 바로 직전, 동기적으로 실행</td>
        </tr>
        <tr>
            <td>사용 사례</td>
            <td>데이터 fetching, 이벤트 리스너 등록, 다른 비동기 작업</td>
            <td>DOM 노드를 직접 조작하거나, 레이아웃을 조정해야 할 때</td>
        </tr>
        <tr>
            <td>주의사항</td>
            <td>화면 깜빡임을 일으킬 수 있는 작업을 피해야 함</td>
            <td>브라우저가 화면을 그리기 전에 실행되므로 성능에 영향을 줄 수 있음</td>
        </tr>
    </tbody>
</table>

## SSR 에서의 한계
> 에러 메시지: `useLayoutEffect` does nothing on the server

useLayoutEffect의 목적은 레이아웃 정보를 사용해서 컴포넌트를 렌더링하는 것이다

절차
1. 초기 컨텐츠 렌더링
2. 브라우저 리페인팅 전에 레이아웃 계산
3. 레이아웃 계산 결과를 바탕으로 리페인팅(리렌더링)

그런데, SSR의 경우, 초기 컨텐츠의 레이아웃 정보가 없다 (유저의 상호작용을 바탕으로 클라이언트에서 레이아웃 정보가 업데이트되기 때문)

### 해결방법
- useLayoutEffect 대신 useEffect 사용 (리페인팅 후에 레이아웃 재계산 가능)
  - 추가로, Suspense 활용하여 fallback 대신 보여주기
- `useSyncExternalStore` 활용 (SSR 가능)
  - 컴포넌트를 외부 데이터 저장소와 동기화하고, 레이아웃 계산 외에 다른 이유일 때