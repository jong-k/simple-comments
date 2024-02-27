import { useState, useEffect } from "react";
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from "./ChatUtils";

interface ChatRoomProps {
  roomId: string;
  isEncrypted: boolean;
}

export default function ChatRoom({ roomId, isEncrypted }: ChatRoomProps) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const createConnection = isEncrypted
      ? createEncryptedConnection
      : createUnencryptedConnection;
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, isEncrypted]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
    </>
  );
}
