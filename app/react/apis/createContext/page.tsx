import Link from "next/link";

export default function CreateContext() {
  return (
    <div>
      {/* -> 이렇게 쓰면 eslint 에러 */}
      <h2>createContext &gt; 아래 페이지에서 설명</h2>
      <Link href="/react/hooks/useContext">useContext</Link>
    </div>
  );
}
