"use client";
export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

// 공용 버튼 컴포넌트
// 스타일을 지정하고 동작은 이벤트 핸들러를 props로 받음
function Button({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}

interface PlayButtonProps {
  movieName: string;
}

// 공용 컴포넌트를 사용하는 재생 버튼 컴포넌트
// 이벤트 핸들러를 내부에서 만들어서 props로 전달
function PlayButton({ movieName }: PlayButtonProps) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}
