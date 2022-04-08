import { useState } from 'react';
import data from './data'

function App() {
  const [newData,setData]=useState([]);
  const[number,setNumber]=useState(0);
  const createParagraphs=(e)=>{
    e.preventDefault();
    let num=parseInt(number);
    if(number>data.length){num=data.length}
    if(number<0){num=0}
    setData(data.slice(0,num));
  }
  return (
    <div className="App">
      <h2>tired of boring lorem ipsum?</h2>
      <form onSubmit={createParagraphs}>
        <label htmlFor="number">Paragraphs:</label>
        <input type="number" name="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <button type='submit'>Generate</button>
      </form>
      {number>data.length?<div className='warning'>max number is {data.length}</div>:number<0?<div className='warning'>wrong value</div>:''}
      {
        newData.map((item,i)=>{
          return(
            <p key={i}>{item}</p>
          )
        })
      }
    </div>
  );
}

export default App;
