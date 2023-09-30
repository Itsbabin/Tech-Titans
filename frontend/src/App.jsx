import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom';
import Singin from "./components/Singin";
import Home from "./components/Home";
function App() {
  return (
    <>
          <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singin" element={<Singin/>} />
       </Routes>
   
    </>
  )
}

export default App
