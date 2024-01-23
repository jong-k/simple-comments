import { useState } from "react";
import SlowProductPage from "./SlowProductPage";

export default function FastCase() {
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
      <SlowProductPage
        referrer="wizard_of_oz"
        productId={123}
        theme={isDark ? "dark" : "light"}
      />
    </>
  );
}
