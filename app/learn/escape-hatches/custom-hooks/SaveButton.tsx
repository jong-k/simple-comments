import { useState, useEffect } from "react";

export default function SaveButton() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleSaveClick = () => {
    console.log("✅ 진행사항 저장됨");
  };

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "진행사항 저장" : "재연결 중..."}
    </button>
  );
}
