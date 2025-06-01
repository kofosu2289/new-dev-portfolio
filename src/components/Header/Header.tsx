import { header } from "./Header.css";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { Nav } from "../Nav/Nav";

export function Header() {
    return (
      <header className={header}>
        <h1>Kenneth Ofosu</h1>
        <Nav />
        <ThemeToggle />
      </header>
    )
}