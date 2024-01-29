"use client";
import { use, useEffect } from "react";

export default function Use() {
  // TODO: React 블로그에 올리기
  useEffect(() => {
    const top = async () => {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log("a!");
          resolve();
        }, 500);
      });
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log("b!");
          resolve();
        }, 500);
      });
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log("c!");
          resolve();
        }, 500);
      });
    };
    top();
  }, []);
  // const promise = new Promise(() => {
  //   return setTimeout(() => "end!", 1000);
  // });
  // const str = use(promise);
  //
  // useEffect(() => {
  //   console.log(str);
  // }, [str]);

  return (
    <div>
      <h2>use</h2>
    </div>
  );
}
