import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-container">
      <img src="/Copilot_20260222_091225.png" alt="Astryx Logo" />
      <nav className="nav-bar">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/behind-the-scenes">Behind The Scenes</Link></li>
        <li><Link to="/our-work">Our Work</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>

      <div className="Home">
      <h1>Crafting Stories That Matter</h1>
      <p>Astryx is a film production company dedicated to creating authentic, powerful narratives that resonate across cultures and generations.</p>

    
      <Link to="/our-work" className="btn">Our Work</Link>
      <Link to="/contact-us" className="btn">Contact Us</Link>
      </div>
    </div>
      

    
  )
}

export default Home