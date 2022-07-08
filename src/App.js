




// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    
    if (mode === 'light') {
      setMode('dark');
      document.body.style.color = 'white';
      document.body.style.backgroundColor = 'rgb(52 46 69)';
      document.getElementById('myBox').style.backgroundColor = '#040b24';
      document.getElementById('myBox').style.color = 'white';
      document.body.style.transition = 'all 0.5s ease'
      showAlert('Dark mode has been enabled', 'success');
      setInterval(() => {
        document.title = 'TextUtils | Dark mode';

      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils'
      }, 1300);
    }
    else {
      setMode('light');
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      document.body.style.transition = 'all 0.5s ease'
      document.getElementById('myBox').style.backgroundColor = 'white';
      document.getElementById('myBox').style.color = 'black';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils | Light mode';
    }
  }
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title='TEXTUtils' aboutText='About' mode={mode} toggleMode={toggleMode} /> {/*yha aise props send krte hai*/}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>

            <Route exact path='/' element={<TextForm heading='Try TextUtils- Word counter, Character counter, Remove extra spaces' showAlert={showAlert} />} />

            <Route exact path='/about' element={<About mode = {mode}/>} />   {/*exact likhne se 100% accuracy ke sath sahi location or link pr pahuchenge, aise react exact match krta hai */}


          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

    // // import logo from './logo.svg';
    // // import './App.css';
    // import Navbar from './components/Navbar';
    // import TextForm from './components/TextForm';
    // import About from './components/About';
    // import Alert from './components/Alert';
    // import { useState } from 'react';
    // import React from "react";
    // import {
    //   BrowserRouter,
    //   Routes,
    //   Route
    
    // } from "react-router-dom";
    
    // function App() {
    
    //   const [alert, setAlert] = useState(null);
    
    //   const [mode, setMode] = useState('light');
    
    //   const removeBodyClassses = ()=>{
    //     document.body.classList.remove('bg-light');
    //     document.body.classList.remove('bg-dark');
    //     document.body.classList.remove('bg-success');
    //     document.body.classList.remove('bg-danger');
    //     document.body.classList.remove('bg-warning');
    //     document.body.classList.remove('bg-primary');
    //     document.body.classList.remove('bg-secondary');
    //     document.body.classList.remove('bg-info');
    //   }
    
    //   const toggleMode = (cls) => {
    //     console.log(cls);
    //     removeBodyClassses()
    
    //     document.body.classList.add('bg-'+cls);
    //     if (mode === 'light') {
    //       setMode('dark');
    //       document.body.style.color = 'white';
    //       // document.body.style.backgroundColor = 'rgb(52 46 69)';
    //       document.getElementById('myBox').style.backgroundColor = '#040b24';
    //       document.getElementById('myBox').style.color = 'white';
    //       document.body.style.transition = 'all 0.5s ease'
    //       showAlert('Dark mode has been enabled', 'success');
    //       setInterval(() => {
    //         document.title = 'TextUtils | Dark mode';
    
    //       }, 2000);
    //       setInterval(() => {
    //         document.title = 'Install TextUtils'
    //       }, 1300);
    //     }
    //     else {
    //       setMode('light');
    //       document.body.style.color = 'black';
    //       document.body.style.backgroundColor = 'white';
    //       document.body.style.transition = 'all 0.5s ease'
    //       document.getElementById('myBox').style.backgroundColor = 'white';
    //       document.getElementById('myBox').style.color = 'black';
    //       showAlert('Light mode has been enabled', 'success');
    //       document.title = 'TextUtils | Light mode';
    //     }
    
     
    
    //   }
    
    //   const showAlert = (message, type) => {
    //     setAlert({
    //       msg: message,
    //       type: type
    //     })
    //     setTimeout(() => {
    //       setAlert(null);
    //     }, 2500);
    //   }
    
    //   return (
    //     <>
    //       <BrowserRouter>
    //         <Navbar title='TEXTUtils' aboutText='About' mode={mode} toggleMode={toggleMode} /> {/*yha aise props send krte hai*/}
    //         <Alert alert={alert} />
    //         <div className="container my-3">
    //           <Routes>
    
    //             <Route exact path='/' element={<TextForm heading='Try TextUtils- Word counter, Character counter, Remove extra spaces' showAlert={showAlert} />} />
    
    //             <Route exact path='/about' element={<About mode = {mode}/>} />   {/*exact likhne se 100% accuracy ke sath sahi location or link pr pahuchenge, aise react exact match krta hai */}
    
    
    //           </Routes>
    
    //         </div>
    //       </BrowserRouter>
    //     </>
    //   );
    // }
    
    // export default App;