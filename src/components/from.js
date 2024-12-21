import React, { useState } from "react";

export default function Textfrom(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted To UpperCase", "success");
  };
  const handledownClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted To LowerCase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const reverseClick = () => {
    let netext = text.split("").reverse().join("");
    setText(netext);
    props.showAlert("Converted To Reverse Order", "success");
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label">
            <h1>{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            id="mybox"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#2d2a45" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
            value={text}
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length === 0}
          type="button"
          className="btn btn-primary btn-lg mx-1 my-1"
          onClick={handleUpClick}
        >
          UpperCase
        </button>
        <button disabled={text.length === 0}
          type="button"
          className="btn btn-primary btn-lg mx-1 my-1"
          onClick={handledownClick}
        >
          LowerCase
        </button>
        <button disabled={text.length === 0}
          type="button"
          className="btn btn-primary btn-lg mx-1  my-1"
          onClick={reverseClick}
        >
          Reverse Value
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your Text Here</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words And {text.length} Letters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Taken To Read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
