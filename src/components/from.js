import React, { useState } from "react";

export default function Textfrom(props) {
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handledownClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handleOnChange = (event) => {
        setText(event.target.value);

    }
    const reverseClick = () => {
        let netext= text.split('').reverse().join('');
        setText(netext);

    }
    const [text, setText] = useState('');

    return (
        <>
            <div className="container"  style={{color: props.mode=== 'light'?'black':'white'}}>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label">
                       <h1>{props.heading}</h1> 
                    </label>
                    <textarea className="form-control" id="mybox" onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white',color: props.mode=== 'light'?'black':'white'}} value={text} rows="8" ></textarea>
                </div>
                <button type="button" className="btn btn-primary btn-lg" onClick={handleUpClick}>
                    UpperCase
                </button>
                <button type="button" className="btn btn-primary btn-lg mx-3" onClick={handledownClick}>
                    LowwerCase
                </button>
                <button type="button" className="btn btn-primary btn-lg mx-3" onClick={reverseClick}>
                    Reverse Value
                </button>
            </div>
            <div className="container my-3" style={{color: props.mode=== 'light'?'black':'white'}}>
                <h1>Your Text Here</h1>
                <p>{text.split(" ").length} Words And {text.length} Letters</p>
                <p>{0.008 * text.length} Minutes Taken To Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
