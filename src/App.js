// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/from";

function App() {
  return (
    <>
      <Navbar title="NavBarUse" home="Home" about="aboutUS"/>
      <div className="container">
      <Textform heading="Enter Text Here Below"/>
      </div>
    </>
  );
}

export default App;
