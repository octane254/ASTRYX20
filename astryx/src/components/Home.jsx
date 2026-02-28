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

      {/* Hero Section */}
      <div className="Home">
        <h1>Crafting Stories That Matter</h1>
        <p>Astryx is a film production company dedicated to creating authentic, powerful narratives that resonate across cultures and generations.</p>

        <Link to="/our-work" className="btn">Our Work</Link>
        <Link to="/contact-us" className="btn">Contact Us</Link>
      </div>

      {/* BTS Preview Section */}
      <div className="bts-preview-section">
        <h2>Behind The Scenes</h2>
        <p className="section-subtitle">Get an exclusive look at our creative process</p>
        
        <div className="bts-preview-grid">
          <div className="bts-preview-card">
            <video src="/bts1.mp4" controls></video>
            <div className="bts-preview-info">
              <h3>Making of Film 1</h3>
              <p>A glimpse into the making of Film 1.</p>
            </div>
          </div>

          <div className="bts-preview-card">
            <video src="/bts2.mp4" controls></video>
            <div className="bts-preview-info">
              <h3>Making of Film 2</h3>
              <p>A glimpse into the making of Film 2.</p>
            </div>
          </div>
        </div>
        
        <Link to="/behind-the-scenes" className="btn-view-more">View All Behind The Scenes</Link>
      </div>
    </div>
  );
}

export default Home;