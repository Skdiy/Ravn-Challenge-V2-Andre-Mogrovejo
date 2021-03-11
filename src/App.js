import React from 'react';
import Header from './components/header.js';
import Register from './components/register.js'
import './components/components-styles/register.css'

function App() {


  return (
    <>
      <Header />
      <div className= "register-box">
        <Register />
      </div>

    </>
  );
}

export default App;