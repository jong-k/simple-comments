import { createContext, SetStateAction, useContext, useState } from "react";

const ThemeContext = createContext<Theme | null>(null);
const CurrentUserContext = createContext<UserContext | null>(null);

type Theme = "dark" | "light";
interface User {
  name: string;
}
interface UserContext {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
}

export default function SimpleForm() {
  const [theme, setTheme] = useState<Theme>("light");
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <MyProviders theme={theme}>
      <WelcomePanel />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
        Use dark mode
      </label>
    </MyProviders>
  );
}

interface MyProvidersProps {
  children: React.ReactNode;
  theme: Theme;
}

function MyProviders({ children, theme }: MyProvidersProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // setCurrentUser를 직접 provider에 전달하기보다, handler로 만들고
  // useCallback으로 래핑한 뒤 전달하면, 불필요한 리렌더링 방지할 수 있다
  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        {children}
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

function WelcomePanel() {
  const currentUserContext = useContext(CurrentUserContext);
  const { currentUser } = currentUserContext!;
  return (
    <Panel title="Welcome!">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
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

function Greeting() {
  const currentUserContext = useContext(CurrentUserContext);
  const { currentUser } = currentUserContext!;
  return <p>You logged in as {currentUser?.name}.</p>;
}

function LoginForm() {
  const currentUserContext = useContext(CurrentUserContext);
  const { setCurrentUser } = currentUserContext!;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const canLogin = firstName !== "" && lastName !== "";
  return (
    <>
      <label>
        First name{": "}
        <input
          className="bg-amber-200"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last name{": "}
        <input
          className="bg-amber-200"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <Button
        disabled={!canLogin}
        onClick={() => {
          setCurrentUser({
            name: firstName + " " + lastName,
          });
        }}
      >
        Log in
      </Button>
      {!canLogin && <i>Fill in both fields.</i>}
    </>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
}

function Button({ children, disabled, onClick }: ButtonProps) {
  const theme = useContext(ThemeContext);
  return (
    <button className={`panel-${theme}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
