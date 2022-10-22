import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import TextForm2 from './components/TextForm2';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
      }
    )

  }

  const toggleMode = () =>{
    if(mode=='light'){
      setMode('dark')
      document.body.style.backgroundColor="#050A30";
      showAlert("Dark mode has been enabled","danger")
      document.title="TextUtils - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","danger")
      document.title="TextUtils - Light Mode"
    }
    
  }

  return (
    <>
    
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      {/* <Navbar/> */}
      <div className="container my-3">
        

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TextForm heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode}/>}></Route>
          <Route path='/about' element={<About/>}></Route> 
        </Routes>
      </BrowserRouter>
        
        {/* <TextForm heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode}/> */}
        {/* <TextForm2 heading="Enter the text to analyze1"/> */}
      </div>
    </>
    
  );
}

export default App;
