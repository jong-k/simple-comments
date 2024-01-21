import { Suspense, useState } from "react";
import SearchResults from "./SearchResults";

export default function Search() {
  const [query, setQuery] = useState("");
  return (
    <div className="w-full h-full bg-amber-200 p-10">
      <label>
        Search albums:
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={query} />
      </Suspense>
    </div>
  );
}
