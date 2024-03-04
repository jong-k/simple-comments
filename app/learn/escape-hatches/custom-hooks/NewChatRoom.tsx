import { useState } from "react";
import { useChatRoom } from "./useChatRoom";

interface ChatRoomProps {
  roomId: string;
  isEncrypted: boolean;
}

export default function NewChatRoom({ roomId, isEncrypted }: ChatRoomProps) {
  const [message, setMessage] = useState("");

  useChatRoom(roomId, isEncrypted);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
    </>
  );
}
