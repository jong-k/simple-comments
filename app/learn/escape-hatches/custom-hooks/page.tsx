"use client";
import NetworkStatus from "./NetworkStatus";
import SaveButton from "./SaveButton";

export default function CustomHooks() {
  return (
    <div>
      <NetworkStatus />
      <hr />
      <SaveButton />
    </div>
  );
}
