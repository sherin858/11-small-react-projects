import React from 'react'
import { useState } from 'react'
function Accordion({question}) {
    const[info,setInfo]=useState(false);
return (
    <div className="question">
    <header>
        <h4>{question.title}</h4>
        <button  onClick={()=>setInfo(!info)}>{info?'-':'+'}</button>
    </header>
    {
        info&&<p>{question.info}</p> 
    }            
    </div>
)
}

export default Accordion
