import { createContext, useContext, useState } from "react";

const ThemeContext = createContext<Theme | null>(null);

type Theme = "dark" | "light";

export default function SimpleForm() {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <ThemeContext.Provider value={theme}>
      <WelcomePanel />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
        Use dark mode
      </label>
    </ThemeContext.Provider>
  );
}

function WelcomePanel() {
  return (
    <Panel title="Welcome!">
      <div>ho</div>
    </Panel>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const theme = useContext(ThemeContext);

  return (
    <section className={`panel-${theme}`}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
