import { useState } from "react";
import SlowList from "./SlowList";

export default function SlowCase() {
  const [text, setText] = useState("");
  return (
    <div className="caseContainer">
      <h2 className="title">
        useDeferredValue 미적용, UI 업데이트로 인해 타이핑 끊김
      </h2>
      <h2 className="title">list의 렌더링 우선순위 차이 없음</h2>
      <input
        placeholder="아무 텍스트나 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <SlowList text={text} />
    </div>
  );
}
