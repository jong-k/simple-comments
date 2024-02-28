import { useState, useEffect } from "react";
import { type Item, fetchData } from "./travelApi";

export function useSelectOptions(url: string | null) {
  const [list, setList] = useState<Item[]>([]);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    if (!url) return;

    let ignore = false;
    fetchData(url).then((result) => {
      if (!ignore) {
        setList(result);
        setSelectedId(result[0].id);
      }
    });
    return () => {
      ignore = true;
    };
  }, [url]);

  return { list, selectedId, setList, setSelectedId };
}
