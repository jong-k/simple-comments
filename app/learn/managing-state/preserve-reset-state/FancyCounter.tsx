import { useState } from "react";
import Counter from "./Counter";

export default function FancyCounter() {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <div>
      {/* 컴포넌트 위치가 어차피 동일하기 때문에 state는 보존되나, 이 경우에는 isFancy props에 곧바로 isFancy 상태를 전달하여 조건부 렌더링을 피할 수 있다 */}
      {isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}
