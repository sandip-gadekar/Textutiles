
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React,{ useState } from "react";

import { Routes, Route, Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const toggle=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title="Dark Mode-Light"
      
      
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      document.title="Dark Mode-blue"
      
    }
  }
  
  return (
    <>
      <Navbar title="TextUtiles" about="About" mode={mode} toggle={toggle}/>
      <Routes>
        <Route path="About" element={<About/>} />
          <Route path="/" element={<TextForm mode={mode} toggle={toggle}/>} />
          <Route path="About" element={<About/>} />
      </Routes>
      
    </>
    
  );
}

export default App;
