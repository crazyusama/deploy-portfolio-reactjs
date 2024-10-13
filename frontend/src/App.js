import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {

  const [show,setshow] = useState(false);
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home show={show} setshow={setshow}/>}/>
          <Route path='/about' element={<About show={show} setshow={setshow}/>}/>
          <Route path='/resume' element={<Resume show={show} setshow={setshow}/>}/>
          <Route path='/portfolio' element={<Portfolio show={show} setshow={setshow}/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
