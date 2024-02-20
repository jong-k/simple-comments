"use client";
import Stopwatch from "./Stopwatch";
import Dashboard from "./Dashboard";

export default function ReferencingRefs() {
  return (
    <div>
      <h2>Stopwatch</h2>
      <Stopwatch />
      <hr />
      <h2>Dashboard</h2>
      <Dashboard />
    </div>
  );
}
