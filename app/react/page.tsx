import Link from "next/link";

export default function React() {
  return (
    <div>
      <Link href="/react/hooks">
        <h2 className="text-2xl">Hooks</h2>
      </Link>
      <Link href="/react/apis">
        <h2 className="text-2xl">APIs</h2>
      </Link>
    </div>
  );
}
