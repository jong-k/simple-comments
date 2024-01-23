import { useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Section({ children }: { children: React.ReactNode }) {
  // 가장 가까운 상위의 Provider(상위 Section) 에서 value를 가져옴
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
