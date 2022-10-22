import React, {useState} from 'react'

export default function TextForm2(props) {
    const handleOnChange = (event) =>{
        console.log("onChange event fired")
        setText(event.target.value)
    }
    const handleOnClick = () =>{
        console.log("onClick event fired")
        setText("")
    }

    const [text,setText] = useState("Write Something Here");
  return (
    <div>
        <h1>{props.heading}</h1>
      
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnClick}>Convert to UpperCase</button>
    
    </div>
  )
}
