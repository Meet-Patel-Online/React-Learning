// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/from";


function App() {
  const [mode, setMode] = useState('light');
 
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background="grey";
    }
    else {
      setMode('light');
      document.body.style.background="white";
    }
  }
  
  return (
    <>
      <Navbar title="NavBarUse" home="Home" about="aboutUS" mode={mode} toggleMode={toggleMode}  />
      <div className="container">
        <Textform heading="Enter Text Here Below"  mode={mode}/>
        <About mode={mode}/>
      </div>
    </>
  );
}

export default App;
