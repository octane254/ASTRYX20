// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// components
import Navigation from './components/Navigation';
import Home from './components/Home';
import BehindTheScenes from './components/BehindTheScenes';
import OurWork from './components/OurWork';
import ContactUs from './components/ContactUs';

// Styling
import "./styles/Navigation.css";
import "./styles/Home.css";
import "./styles/BehindTheScenes.css";
import "./styles/OurWork.css"
import "./styles/ContactUs.css"




function App() {
  return (
    <BrowserRouter>
      <Navigation />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/behind-the-scenes" element={<BehindTheScenes />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;