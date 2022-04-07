import React from 'react'
import { ImQuotesRight} from "react-icons/im";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from './data'
import { useState,useEffect} from 'react';

function Slide() {
    const[index,setIndex]=useState(0);
    const checkNumber=(index)=>{
        if(index>data.length-1){
            return 0
        }
        if(index<0){
            return data.length-1
        }
        return index
    }
    useEffect(()=>{
        const timer=setInterval(()=>{
            setIndex(checkNumber(index+1))
        },5000)
        return ()=>clearInterval(timer)
    },[index])
    return (
    <div className='container'>
        {
        data.map((person,i)=>{
        const {id,image,name,title,quote}=person;
        let position=(i==index)?"active":i==index-1||(index==0&&i==data.length-1)?"prev":"next";
        if (index==0){data[data.length-1].className="prev"}
        return(
        <div className={`slide ${position}`} key={id}>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{title}</p>
            <p>{quote}</p>
            <ImQuotesRight className='quote'></ImQuotesRight>
        </div>
        )
                })
        }
            <button className={`btn left `} onClick={()=>setIndex(checkNumber(index-1))}><FiChevronLeft/></button>
            <button className=" btn right" onClick={()=>setIndex(checkNumber(index+1))}><FiChevronRight/></button>
    </div>
    )
}

export default Slide
