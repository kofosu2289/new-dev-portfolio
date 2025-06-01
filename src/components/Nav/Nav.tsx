import { Link, useLocation } from "react-router-dom";
import { nav, navItem, active } from "./Nav.css";


const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];
  
  export function Nav() {
    const { pathname } = useLocation();
  
    return (
      <nav aria-label="Main navigation">
        <ul className={nav}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`${navItem} ${pathname === to ? active : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }