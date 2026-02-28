// Navigation.jsx
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <img src="/Copilot_20260222_091225.png" alt="Astryx Logo" className="site-logo" />
      <nav className="nav-bar">
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/behind-the-scenes">Behind The Scenes</NavLink></li>
          <li><NavLink to="/our-work">Our Work</NavLink></li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;