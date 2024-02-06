"use client";
import ButtonWithTooltip from "./ButtonWithTooltip";
import ButtonWithRefactoredTooltip from "./ButtonWithRefactoredTooltip";

export default function UseLayoutEffect() {
  return (
    <div style={{ display: "flex" }}>
      <h2>useEffect</h2>
      <div style={{ margin: "0 2rem" }}>
        <ButtonWithTooltip
          tooltipContent={
            <div>
              This tooltip does not fit above the button.
              <br />
              This is why it's displayed below instead!
            </div>
          }
        >
          Hover over me (tooltip above)
        </ButtonWithTooltip>
        <div style={{ height: 50 }} />
        <ButtonWithTooltip
          tooltipContent={<div>This tooltip fits above the button</div>}
        >
          Hover over me (tooltip below)
        </ButtonWithTooltip>
        <div style={{ height: 50 }} />
        <ButtonWithTooltip
          tooltipContent={<div>This tooltip fits above the button</div>}
        >
          Hover over me (tooltip below)
        </ButtonWithTooltip>
      </div>
      <h2>useLayoutEffect</h2>
      <div style={{ margin: "0 2rem" }}>
        <ButtonWithRefactoredTooltip
          tooltipContent={
            <div>
              This tooltip does not fit above the button.
              <br />
              This is why it's displayed below instead!
            </div>
          }
        >
          Hover over me (tooltip above)
        </ButtonWithRefactoredTooltip>
        <div style={{ height: 50 }} />
        <ButtonWithRefactoredTooltip
          tooltipContent={<div>This tooltip fits above the button</div>}
        >
          Hover over me (tooltip below)
        </ButtonWithRefactoredTooltip>
        <div style={{ height: 50 }} />
        <ButtonWithRefactoredTooltip
          tooltipContent={<div>This tooltip fits above the button</div>}
        >
          Hover over me (tooltip below)
        </ButtonWithRefactoredTooltip>
      </div>
    </div>
  );
}
