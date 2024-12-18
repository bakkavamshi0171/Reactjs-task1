import React, { useState } from 'react';
import ButtonComp from './button';

export default function DisplayComp() {
  const [incre, setIncre] =useState(0);
  const incrementFun= ()=>{
    setIncre(incre+1)
  }
  const decrementFun =()=>{
    setIncre(incre-1)
  }
  return (
    <>
      <h1>count: {incre}</h1>
      <ButtonComp update={incrementFun} reduce={decrementFun}/>
    </>
  )
}
