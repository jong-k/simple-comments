"use client";
import ChatContainer from "./ChatContainer";
import TravelContainer from "./TravelContainer";

export default function EffectsLifecycle() {
  return (
    <div>
      <h2>채팅 앱</h2>
      <ChatContainer />
      <hr />
      <h2>여행 앱</h2>
      <TravelContainer />
    </div>
  );
}
