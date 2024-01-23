"use client";
import "./index.scss";
import Search from "./Search";
import FastCase from "./FastCase";
import SlowCase from "./SlowCase";

export default function UseDeferredValue() {
  return (
    <div>
      <h2>useDeferredValue</h2>
      {/* 예제1 */}
      <Search />
      {/* 예제2 */}
      <div className="caseBox">
        <FastCase />
        <SlowCase />
      </div>
    </div>
  );
}
