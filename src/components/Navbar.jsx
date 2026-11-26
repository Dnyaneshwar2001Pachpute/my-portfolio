
import { useState } from "react";
import "./Navbar.css";
import { NavLink} from "react-router-dom";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar-logo">
        <NavLink to="/" onClick={closeMenu}>
          Dnyaneshwar<span>.</span>
        </NavLink>
      </div>

      {/* Navigation links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>

        <li>
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/skills"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Skills
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </NavLink>
        </li>

      </ul>

      {/* Contact Button */}
          <NavLink
        to="/contact"
        onClick={closeMenu}
        className="navbar-contact"
      >
        Contact Me
      </NavLink>
      
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
  );
}

export default Navbar;
