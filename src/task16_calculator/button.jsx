import React from 'react';
// import {Link} from "react-router-dom";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function ButtonComp({update,reduce}) {
  
  return (
    <>
      <button onClick={update}>Increment</button>
      <button onClick={reduce}>Decrement</button>
    </>
  )
}
