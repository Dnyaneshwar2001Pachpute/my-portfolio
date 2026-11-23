import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


function Navbar() {
    const [menuOpen,setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return(
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar-logo">
                <a href="/">
                Dnyaneshwar<span>.</span>
                </a>
            </div>

            {/* Navigation links */}
            <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            About
            </NavLink>

            <NavLink to="/skills" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Skills
            </NavLink>

            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Projects
            </NavLink>
          
            </ul>

            {/* Contact Button */}
            <a href="#contact" className="navbar-contact">Contact Me</a>

            {/* Mobile menu button */}
            <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            >
            {menuOpen ? "✕" : "☰"}

            </button>
        </nav>
    )
}

export default Navbar;