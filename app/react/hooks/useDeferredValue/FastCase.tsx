import { useState, useDeferredValue } from "react";
import SlowList from "./SlowList";

export default function FastCase() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);
  return (
    <div className="border">
      <h2 className="m-5">useDeferredValue 적용하여 타이핑 안끊김</h2>
      <h2 className="m-5">list의 렌더링 우선순위 낮음</h2>

      <input
        className="bg-slate-200"
        placeholder="아무 텍스트나 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <SlowList text={deferredText} />
    </div>
  );
}
