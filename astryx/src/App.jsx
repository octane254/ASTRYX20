import { BrowserRouter, Routes, Route } from 'react-router-dom';
// components
import Home from './components/Home'

//styles
import "./styles/Home.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
