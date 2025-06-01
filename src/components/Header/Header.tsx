import { header } from "./Header.css";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

export function Header() {
    return (
      <header className={header}>
        <h1>Kenneth Ofosu</h1>
        <ThemeToggle />
      </header>
    )
}