import React from 'react'

function Categories({Menu,filter}) {
const categories=['All',...new Set(Menu.map((item)=>item.category))]
  return (
    <div className='buttons-container'>
      {
          categories.map((category,index)=><button key={index} onClick={()=>filter(category)}>{category}</button>)
      }
    </div>
  )
}

export default Categories
