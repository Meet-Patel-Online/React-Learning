// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/from";
import Alert from "./components/Alert";
import Color from "./components/Color";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#131338";
      showAlert("Dark Mode Has Been Enabled!", "success");
      document.title = "Dark Mode";
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light Mode Has Been Enabled!", "success");
      document.title = "light Mode";
    }
  };

  return (
    <Router>
      <Navbar
        title="NavBarUse"
        home="Home"
        about="AboutUS"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
        <Routes> 
          <Route> 
          <Route path="AboutUs" element={<About mode={mode}/>} />
          <Route path="/"
            element={<Textform
              showAlert={showAlert}
              heading="Enter Text Here Below"
              mode={mode}
            />}/>
          
          </Route>
        </Routes>

        {/* <Color /> */}
        {/* <About mode={mode}/> */}
      </div>
    </Router>
  );
}

export default App;
