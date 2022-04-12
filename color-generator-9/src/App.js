import { useState } from "react";
import Values from "values.js";
import Color from "./components/Color";

function App() {
  const[color,setColor]=useState('');
  const[colorList,setList]=useState(new Values('#f15025').all(10));
  const[warning,setWarning]=useState(false)
  const changeColor=(e)=>{
    try{
      e.preventDefault();
      setList(new Values(color).all(10));
      setWarning(false);
      }
    catch(e){
      setWarning(true);
      console.log(e)
    }
    
  }
  return (
    <div className="App">
      <div className="container">
        <h2>color generator</h2>
        <form onSubmit={changeColor}>
          <input 
          type="text" className={warning?'warning':''} 
          placeholder='#f15025' 
          value={color} 
          onChange={(e)=>setColor(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      </div>
      <div className="colors-container">
        {colorList.map((color,index)=>{
          return(
            <Color key={index} index={index} color={color} halfLength={colorList.length/2}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
