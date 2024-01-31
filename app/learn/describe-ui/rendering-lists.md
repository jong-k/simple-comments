# Rendering Lists

## key props
- key: DOM node 항목을 고유하게 식별하기 위해 반드시 필요

key props를 Fragment 에서 사용하기
```jsx
import { Fragment } from 'react';

// ...

const listItems = people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
);
```

key 생성 규칙
- 형제(같은 배열) 에서 고유해야 함
- 렌더링 중에 변경되면 안됨 (렌더링 전, 후에 달라지면 안됨)
- 사실, 배열의 인덱스를 key로 쓰는 것도 좋지 않음
  - 배열 항목이 바뀌면서 버그가 발생할 수 있음