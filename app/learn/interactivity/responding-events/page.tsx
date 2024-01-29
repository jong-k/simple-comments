import Toolbar from "./Toolbar";
import GrayToolbar from "./GrayToolbar";
import "./index.scss";

export default function RespondingToEvents() {
  return (
    <div>
      <h1>Responding To Events</h1>
      <div>
        <h2>공용 컴포넌트에서 이벤트 핸들러 사용하기</h2>
        <Toolbar />
      </div>
      ---------------------------------------------
      <div>
        <h2>좌) 이벤트 전파O 우) e.stopPropagation</h2>
        <GrayToolbar />
      </div>
    </div>
  );
}
