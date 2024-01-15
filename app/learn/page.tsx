import Link from "next/link";

export default function Learn() {
  return (
    <div>
      <Link href="/learn/passing-props">
        <h2 className="text-2xl">props 전달하기</h2>
      </Link>
    </div>
  );
}
