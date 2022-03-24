import './App.css';
import List from './components/List';
import peoplelist from './components/peoplelist'
import {useState} from 'react'
function App() {
  const [peopleList,setPeopleList]=useState(peoplelist);
  return (
    <div className="App">
      <div className="ccontainer">
      <h3>{peopleList.length} birthdays today</h3>
      <List peoplelist={peopleList}/>
      {peopleList.length?<button onClick={()=>setPeopleList([])}>Clear All</button>:
      <button onClick={()=>setPeopleList(peoplelist)}>Refresh</button>}
      </div>
    </div>
  );
}

export default App;
