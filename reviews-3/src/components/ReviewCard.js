import React from 'react'
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight,FaQuoteRight} from 'react-icons/fa';
function ReviewCard({reviews}) {
    const [index,setIndex]=useState(0)
    const{image,text,name,job}=reviews[index];
    const swipeRight=()=>{
      setIndex((index)=>checkNumber(index+1))
    }
    const swipeLeft=()=>{
      setIndex((index)=>checkNumber(index-1))
    }
    const checkNumber=(number)=>{
      if (number>reviews.length-1)return 0
      if(number<0)return reviews.length-1
      return number
    }
    const surpriseMe=()=>{
      const surprisingReview=Math.floor(Math.random()*reviews.length);
      setIndex(surprisingReview==index?checkNumber(surprisingReview+1):surprisingReview);
      console.log("hello");
    }
  return (
    <div className='mt-5 p-4 reviewCard' style={{backgroundColor:'white'}}>
        <div className='image'>
          <img src={image} alt={name}/>
          <span><FaQuoteRight/></span>
        </div>
        <h4>{name}</h4>
        <p>{job}</p>
        <p>{text}</p>
        <button className='arrowbtn' onClick={()=>swipeLeft()}>
        <FaChevronLeft />
        </button>
        <button className='arrowbtn'onClick={()=>swipeRight()}>
            <FaChevronRight />
        </button>
        <button className='surprisebtn mt-2' onClick={()=>surpriseMe()}>Surprise Me</button>
    </div>
  )
}

export default ReviewCard
