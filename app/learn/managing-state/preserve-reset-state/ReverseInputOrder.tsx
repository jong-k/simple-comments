import { useState } from "react";

export default function ReverseInputOrder() {
  const [reverse, setReverse] = useState(false);
  const checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  return (
    <div>
      {!reverse ? (
        <>
          <Field key="firstName" label="First name" />
          <Field key="lastName" label="Last name" />
        </>
      ) : (
        <>
          <Field key="lastName" label="Last name" />
          <Field key="firstName" label="First name" />
        </>
      )}
      {checkbox}
    </div>
  );
}

function Field({ label }: { label: string }) {
  const [text, setText] = useState("");
  return (
    <label>
      {label}:{" "}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
}
