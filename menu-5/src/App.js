import './App.css';
import Items from './components/Items'
import Menu from './components/data'
import Categories from './components/Categories';
import { useState } from 'react';
function App() {
  const [items,setItems]=useState(Menu);
  const filter=(category)=>{
    if(category=='All'){
      setItems(Menu);
      return
    }
    const custom=Menu.filter((item)=>item.category==category);
    setItems(custom);
  }
  return (
    <div className="App">
    <h1>Our Menu</h1>
    <div className="line"></div>
      <Categories Menu={Menu} filter={filter}/>
      <Items Menu={items} />
    </div>
  );
}

export default App;
