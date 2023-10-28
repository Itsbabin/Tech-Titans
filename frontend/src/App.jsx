import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Singin from "./components/Singin";
import Home from "./components/Home";
import Creat from "./components/Creat";
import CaseState from "./context/caseContext";
function App() {
  return (
    <>
     <CaseState>

      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/singin" element={<Singin/>} />
          <Route path="/creat" element={<Creat/>} />
       </Routes>
   
     </CaseState>
    </>
  )
}

export default App
