import React from 'react';

import './App.css';
import Form from './Form.tsx';
import Login from './Login.tsx';
import Reactform from './Reactform.tsx';
import Sigin from './Sigin.tsx';
import Loginin from './Registration/Loginin.tsx';
import Register from './Registration/Register.tsx';


function App() {
  return (
    <div className="App">
     {/* <Form/> */}
    {/* <Login/> */}
    {/* <Reactform/> */}
    {/* <Sigin/> */}
    <Loginin/>
    <Register/>
    </div>
  );
}

export default App;
