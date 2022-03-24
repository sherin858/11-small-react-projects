import React from 'react'
import liststyle from '../assets/styles/liststyle.css'
function List({peoplelist}) {
  return (
    <>
    {
    peoplelist.map((person)=>
 {   return (
     <div key={person.id} className="person">
    <img src={person.img} alt={person.name} />
    <div>
        <h4>{person.name}</h4>
        <p>{person.age} years old</p>
    </div>
    </div>
    )
}
    )
    }
    </>
  )
}

export default List
