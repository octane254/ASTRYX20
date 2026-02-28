import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Home from './components/Home'
import BehindTheScenes from './components/BehindTheScenes';

//styles
import "./styles/Home.css"
import "./styles/BehindTheScenes.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Behind-The-Scenes" element={<BehindTheScenes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
