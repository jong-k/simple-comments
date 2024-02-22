import Link from "next/link";

export default function EscapeHatches() {
  return (
    <div>
      <Link href="/learn/escape-hatches/referencing-refs">
        <h2>Ref로 값 참조하기</h2>
      </Link>
      <Link href="/learn/escape-hatches/effects-lifecycle">
        <h2>Effect 라이프사이클</h2>
      </Link>
    </div>
  );
}
