import { useState, useRef } from "react";
import Tooltip from "./Tooltip";

interface ButtonWithTooltip {
  tooltipContent: React.ReactNode; // Tooltip에 그대로 표시될 Element
  children: string; // Button Text
}

export interface TargetRect {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

// Tooltip 관련 정보를 받는 Button 컴포넌트
export default function ButtonWithTooltip({
  tooltipContent,
  children,
}: ButtonWithTooltip) {
  // 버튼 엘리먼트의 top, left, bottom, right 좌표를 담는 상태
  const [targetRect, setTargetRect] = useState<TargetRect | null>(null);
  if (targetRect) console.log(targetRect);
  // 동적으로 button element의 height 등 정보를 얻기 위해 선언
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <button
        ref={buttonRef}
        onPointerEnter={() => {
          if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setTargetRect({
              left: rect.left,
              top: rect.top,
              right: rect.right,
              bottom: rect.bottom,
            });
          }
        }}
        onPointerLeave={() => {
          setTargetRect(null);
        }}
      >
        {children}
      </button>
      {targetRect !== null && (
        <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>
      )}
    </>
  );
}
