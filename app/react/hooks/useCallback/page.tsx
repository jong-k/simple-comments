"use client";
import "./index.scss";
import FastCase from "./FastCase";
import SlowCase from "./SlowCase";

export default function UseCallback() {
  return (
    <div>
      <h1>useCallback</h1>
      <div>
        <h2>useCallback을 사용하여 빠른 테마 변경</h2>
        <FastCase />
      </div>
      ----------------------------------------------------------
      <div>
        <h2>useCallback 미사용, 느린 테마 변경</h2>
        <SlowCase />
      </div>
    </div>
  );
}
