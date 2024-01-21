"use client";
import Search from "./Search";
import FastCase from "./FastCase";
import SlowCase from "./SlowCase";

export default function UseDeferredValue() {
  return (
    <div>
      <h2 className="text-2xl">useDeferredValue</h2>
      {/* 예제1 */}
      <Search />
      {/* 예제2 */}
      <div className="m-10 flex justify-center gap-10">
        <FastCase />
        <SlowCase />
      </div>
    </div>
  );
}
