import { useRef, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import TooltipContainer from "./TooltipContainer";
import type { TargetRect } from "./ButtonWithTooltip";

interface TooltipProps {
  children: React.ReactNode; // Tooltip에 그대로 표시될 Element
  targetRect: TargetRect; // target button 엘리먼트의 top, left, bottom, right 좌표를 담는 상태
}

export default function RefactoredTooltip({
  children,
  targetRect,
}: TooltipProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  // 렌더링을 인위적으로 느리게 합니다.
  let now = performance.now();
  while (performance.now() - now < 100) {
    // 잠시 아무것도 하지 않는 중 ...
  }

  // 리페인팅 이전에 effect 동작하여 최종 레이아웃으로 렌더링
  useLayoutEffect(() => {
    if (ref.current) {
      // 툴팁의 height px
      const { height } = ref.current.getBoundingClientRect();
      setTooltipHeight(height);
    }
  }, []);

  let tooltipX = 0;
  let tooltipY = 0;
  if (targetRect !== null) {
    tooltipX = targetRect.left;
    tooltipY = targetRect.top - tooltipHeight;
    // 버튼의 top 보다 툴팁의 height 가 큰 경우
    if (tooltipY < 0) {
      // 위쪽 공간에 들어가지 못하므로 아래에 배치합니다.
      tooltipY = targetRect.bottom;
    }
  }
  // createPortal 로 document.body 에 속하게 만듬
  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.body,
  );
}
