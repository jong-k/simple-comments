import { useOnlineStatus } from "./useOnlineStatus";

export default function SaveButton() {
  const { isOnline } = useOnlineStatus();

  const handleSaveClick = () => {
    console.log("✅ 진행사항 저장됨");
  };

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "진행사항 저장" : "재연결 중..."}
    </button>
  );
}
