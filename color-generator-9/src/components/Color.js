import React from 'react'
import { useState ,useEffect} from 'react';
function Color({color,index,halfLength}) {
const hexValue=`#${color.hex}`;
const[copied,setCopied]=useState(false);
const[hover,setHover]=useState(false);
const copy=(hex)=>{
    navigator.clipboard.writeText(hex);
    setHover(false)
    setCopied(true)
    
  }
useEffect(()=>{
setTimeout(()=>{
setCopied(false)
},3000)
},[copied])
    return (
    <div 
    className={`single-color ${index>halfLength?'lighter-font':''}`} 
    style={{backgroundColor:`rgb(${color.rgb})`}}
    onClick={()=>copy(hexValue)}
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
    >
    <p>{color.weight}%</p>
    <p>#{color.hex}</p>
    {copied&&<p className='copied'>copied to clipboard</p>}
    {hover&&<p className='copied'>click to copy</p>}
    </div>
    )
}

export default Color
