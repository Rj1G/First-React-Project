import React, {useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [dateDisplay,ChagedDateDisplay]  = useState(new Date());
  useEffect(()=>{
    const intervalVariable = setInterval(()=>{
      ChagedDateDisplay(new Date())
    },1000);
    return ()=>clearInterval(intervalVariable);
  })
  return (
    <div><h2>React Clock Example</h2>
   <input/>
   <span>{dateDisplay.toString()}</span>
    </div>
  );
}

export default App;
