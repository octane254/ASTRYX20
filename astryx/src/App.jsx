import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Home from './components/Home'
import BehindTheScenes from './components/BehindTheScenes';
import OurWork from "./components/OurWork"

//styles
import "./styles/Home.css"
import "./styles/BehindTheScenes.css";
import "./styles/OurWork.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Behind-The-Scenes" element={<BehindTheScenes />} />
        <Route path="/Our-Work" element={<OurWork />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
