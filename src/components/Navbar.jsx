import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const navItems = [
  { label: "Solutions", to: "/products" },
  { label: "Applications", to: "/products#applications" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <Link className="brand" to="/" aria-label="UVMARK Solutions home">
        <span className="brand-mark" aria-hidden="true">U</span>
        <span className="brand-copy">
          <strong>UVMARK</strong>
          <small>LAB IDENTIFICATION</small>
        </span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>
          Request a Quote
        </Link>
      </nav>
    </header>
  );
}
