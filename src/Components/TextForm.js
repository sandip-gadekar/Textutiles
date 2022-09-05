import React, { useState } from "react";
export default function TextForm(props) {
    let newtext;
    const [text, setText] = useState("");
    const [btnval, setbuttonvalue] = useState('Uppercase');
    const setbtnvalue = () => {
        if (btnval === 'Uppercase') {
            convertToUpper();
            setbuttonvalue("Lowercase");


        }
        else {
            convertToLower();
            setbuttonvalue('Uppercase');
        }
    }

    const convertToUpper = () => {
        newtext = text.toUpperCase();
        setText(newtext);
    }
    const convertToLower = () => {
        newtext = text.toLowerCase();
        setText(newtext);
    }
    const clearText = () => {
        newtext = '';
        setText(newtext);
    }
    const copyText = () => {
        var copyText = document.getElementById("exampleFormControlTextarea1");

        /* Select the text field */

        copyText.setSelectionRange(0, 99999); /* For mobile devices *
      
         /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();
    }
    const extraSpacesHandle = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const getText = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label my-3">Enter text Here below </label>
                    <textarea className="form-control my-2" id="exampleFormControlTextarea1" rows="8" value={text} onChange={getText} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                    <button type="button" disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={setbtnvalue}  >{btnval}</button>
                    <button type="button" disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear Text</button>
                    <button type="button" disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy Text</button>
                    <button type="button" disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={extraSpacesHandle}>Remove Extra spaces</button>
                    <button type="button" className="custom-btn btn-3"><span>Read More</span></button>
                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Text Summary</h1>
                <p>number of words {text.split(/\s+/).length - 1} and number of character is {text.length}</p>
                <p>{0.0008 * text.split(" ").length} minutes required to read</p>

            </div>
        </>
    )
}
