"use client";
export default function GrayToolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <PropagationButton onClick={() => alert("Playing!")}>
        Play Movie
      </PropagationButton>
      <StopPropagationButton onClick={() => alert("Uploading!")}>
        Upload Image
      </StopPropagationButton>
    </div>
  );
}

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function PropagationButton({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={(e) => {
        onClick();
      }}
    >
      {children}
    </button>
  );
}

function StopPropagationButton({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation(); // 이벤트 전파 방지
        onClick();
      }}
    >
      {children}
    </button>
  );
}
