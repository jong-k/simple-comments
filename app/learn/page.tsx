import Link from "next/link";

export default function Learn() {
  return (
    <div>
      <Link href="/learn/describe-ui">
        <h2>Describing the UI</h2>
      </Link>
      <Link href="/learn/interactivity">
        <h2>Adding Interactivity</h2>
      </Link>
      <Link href="/learn/managing-state">
        <h2>Managing State</h2>
      </Link>
    </div>
  );
}
