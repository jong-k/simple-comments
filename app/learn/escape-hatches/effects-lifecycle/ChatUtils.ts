export const createEncryptedConnection = (roomId: string) => {
  // 실제 구현은 실제로 서버에 연결됩니다.
  return {
    connect() {
      console.log('✅ 🔐 Connecting to "' + roomId + "... (encrypted)");
    },
    disconnect() {
      console.log('❌ 🔐 Disconnected from "' + roomId + '" room (encrypted)');
    },
  };
};

export const createUnencryptedConnection = (roomId: string) => {
  // 실제 구현은 실제로 서버에 연결됩니다.
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + "... (unencrypted)");
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room (unencrypted)');
    },
  };
};
