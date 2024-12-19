// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/from";

function App() {
  return (
    <>
      <Navbar title="NavBarUse" home="Home" about="aboutUS"/>
      <div className="container">
      <Textform heading="Enter Text Here Below"/>
      <About />
      </div>
    </>
  );
}

export default App;
