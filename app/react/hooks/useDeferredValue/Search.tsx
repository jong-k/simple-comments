import { Suspense, useState, useDeferredValue } from "react";
import SearchResults from "./SearchResults";

export default function Search() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;
  return (
    <div className="p-10 border-b-2">
      <label>
        Search albums:
        <input
          placeholder="비틀즈 앨범 제목을 검색하세요"
          className="w-[30rem] bg-slate-200"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <div
          style={{
            opacity: isStale ? 0.5 : 1,
            transition: isStale
              ? "opacity 0.2s 0.2s linear"
              : "opacity 0s 0s linear",
          }}
        >
          <SearchResults query={deferredQuery} />
        </div>
      </Suspense>
    </div>
  );
}
