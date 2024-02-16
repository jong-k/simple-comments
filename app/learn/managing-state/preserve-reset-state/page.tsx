"use client";
import DoubleCounter from "./DoubleCounter";
import FancyCounter from "./FancyCounter";
import ChildrenFancyCounter from "./ChildrenFancyCounter";
import "./index.scss";

export default function PreserveResetState() {
  return (
    <div>
      <DoubleCounter />
      <br />
      <FancyCounter />
      <br />
      <ChildrenFancyCounter />
    </div>
  );
}
