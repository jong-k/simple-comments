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
