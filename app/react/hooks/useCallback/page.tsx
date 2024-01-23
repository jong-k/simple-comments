"use client";
import { useState } from "react";
import "./index.scss";
import FastProductPage from "./FastProductPage";
import SlowProductPage from "./SlowProductPage";

export default function UseCallback() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <div>
        <h2>Fast</h2>
        <FastProductPage
          referrer="wizard_of_oz"
          productId={123}
          theme={isDark ? "dark" : "light"}
        />
      </div>
      <hr />
      <div>
        <h2>Slow</h2>
        <SlowProductPage
          referrer="wizard_of_oz"
          productId={123}
          theme={isDark ? "dark" : "light"}
        />
      </div>
    </>
  );
}
