import { useEffect } from "react";
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from "../effects-lifecycle/chatUtils";

export function useChatRoom(roomId: string, isEncrypted: boolean) {
  useEffect(() => {
    const createConnection = isEncrypted
      ? createEncryptedConnection
      : createUnencryptedConnection;
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, isEncrypted]);
}
