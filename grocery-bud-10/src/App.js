import { useEffect, useState } from "react";
import { FaEdit,FaTrash } from "react-icons/fa";
function App() {
  const[item,setItem]=useState('');
  const[itemsList,setItemsList]=useState([]);
  const[editing,setEditing]=useState(false);
  const[editingIndex,setEditingIndex]=useState(null);
  const[alert,setAlert]=useState({msg:'',type:'',show:false})
  useEffect(()=>{
    const timeout=setTimeout(() => {
      setAlert({msg:'',type:'',show:false})
    }, 4000);
    return ()=>clearInterval(timeout)
  },[alert])
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!editing&&item){
      setItem('');
      setItemsList([...itemsList,item]);}
    else if(item){
      setItemsList(itemsList.map((product,i)=>{
        if(editingIndex==i)return item
        return product
      }));
      setItem('');
      setAlert({msg:'item edited',type:'editAlert',show:true})
      setEditing(false);
      }
      else{
        setAlert({msg:'',type:'emptyAlert',show:false})
      }
  }
  const deleteItem=(index)=>{
    let newList=itemsList;
    newList=newList.filter((element,i)=>i!==index);
    setItemsList(newList);
    setAlert({msg:'item removed',type:'deleteAlert',show:true})
  }
  const editItem=(index)=>{
    setEditing(true);
    setEditingIndex(index)
    setItem(itemsList[index]);
  }
  return (
    <div className="App">
      <div className="container">
        {alert.show?<div className={alert.type}>{alert.msg}</div>:null}
        <h2>Grocery Bud</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" className={alert.type=='emptyAlert'?'Alert':''} placeholder="e.g eggs" value={item} onChange={(e)=>setItem(e.target.value)}/>
          <button type="submit" className="submit-btn">{editing?'Edit':'Submit'}</button>
        </form>
        {itemsList.length>0 &&(
          <div className="items-container">
          {itemsList.map((item,index)=>{
          return (
            <div className="item" key={index}>
              <span>{item}</span>
              <span className="buttons-container">
                <button className="edit" onClick={()=>editItem(index)}><FaEdit/></button>
                <button className="delete" onClick={()=>deleteItem(index)}><FaTrash/></button>
              </span>
            </div>
          )
          })
          }
          <button className="delete" onClick={()=>setItemsList([])}>Clear All</button>
          </div>
        )}
      </div>
  </div>
  );
}

export default App;
