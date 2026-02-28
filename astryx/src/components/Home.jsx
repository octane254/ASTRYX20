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

      {/* Our WorK Preview Section */}
      <div className="work-container">
        <h2>Our Work</h2>
        <p className="section-subtitle">Get an exclusive look at our latest creations</p>

        <div className="work-preview-grid">
          <div className="work-preview-card">
            <video src="/newfilm1.mp4" controls></video>
            <div className="work-preview-info">
              <h3>The Broken Promise</h3>
              <p>The Broken Promise is a heartfelt drama about love, regret, and second chances.</p>
            </div>
          </div>
        </div>
        <div className="work-preview-card">
            <video src="/newfilm1.mp4" controls></video>
            <div className="work-preview-info">
              <h3>The Summer That Turned Grey</h3>
              <p>The Summer That Turned Grey is a coming-of-age drama about a teenage girl who returns to her family’s seaside cottage for one final summer—only to find that childhood traditions, first love, and lifelong friendships are quietly slipping away. As storms roll in and tensions rise, she’s forced to face the bittersweet truth that growing up means letting go of what once felt golden.</p>
          </div>
          
          <Link to="/Our-Work" className="work-view-more">View All Films</Link>
          </div>
      </div>

    </div>
  );
}

export default Home;