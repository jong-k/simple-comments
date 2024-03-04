"use client";
import NetworkStatus from "./NetworkStatus";
import SaveButton from "./SaveButton";
import NewChatContainer from "./NewChatContainer";

export default function CustomHooks() {
  return (
    <div>
      <NetworkStatus />
      <hr />
      <SaveButton />
      <hr />
      <NewChatContainer />
    </div>
  );
}
