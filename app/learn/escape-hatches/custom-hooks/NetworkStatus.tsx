import { useOnlineStatus } from "./useOnlineStatus";

export default function NetworkStatus() {
  const { isOnline } = useOnlineStatus();

  return (
    <div>
      <h1>{isOnline ? "✅ 온라인" : "❌ 연결 안 됨"}</h1>
    </div>
  );
}
