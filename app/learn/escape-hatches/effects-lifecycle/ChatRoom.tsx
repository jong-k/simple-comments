import { useState, useEffect } from "react";
import { createConnection } from "./ChatUtils";

const serverUrl = "https://localhost:1234";

export default function ChatRoom({ roomId }: { roomId: string }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
    // 종속성 배열이 없다면, input 입력으로 message state가 바뀔 때마다 effect가 실행된다
  }, [roomId]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
    </>
  );
}
