import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleUpLowerClick = () =>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleUpClearText = () =>{
        let newText = ""
        setText(newText)
    }


    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const [text,setText] = useState("Enter Text Here");
    return (
    <>

        <div className='container' style={{color:props.mode==='dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark' ? '#C0C0C0' : 'white', color:props.mode==='dark' ? 'black' : 'black'}}></textarea>
            </div>
            <button className="btn btn-primary" id="upperCase" style={{backgroundColor:props.mode==='dark'?'#6610f2':'#198754', border:'0px'}} onClick={handleUpClick}>Convert to UpperCase</button>

            <button className="btn btn-primary mx-2" id="lowerCase" style={{backgroundColor:props.mode==='dark'?'#6610f2':'#198754', border:'0px'}} onClick={handleUpLowerClick}>Convert to LowerCase</button>

            <button className="btn btn-primary mx-2" id="clearText" style={{backgroundColor:props.mode==='dark'?'#6610f2':'#198754', border:'0px'}} onClick={handleUpClearText}>Clear Text</button>
        </div>

        <div className="container my-3" style={{color:props.mode==='dark' ? 'white' : 'black'}}>

            <h2>Your Text Summary</h2>

            <p><b>{text.split(" ").length} words and {text.length} characters</b></p>

            <p>{0.008 * text.split(" ").length} Minutes read</p>

            <h3>Preview</h3>

            <p>{text.length>0?text.toLowerCase():'Enter text in textbox to preview here'}</p>
        </div>

    </>
  )
}
