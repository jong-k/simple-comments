import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/learn">
        <h2 className="text-2xl">Learn</h2>
      </Link>
      <Link href="/react">
        <h2 className="text-2xl">React</h2>
      </Link>
    </div>
  );
}
