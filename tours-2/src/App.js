import './App.css';
import Card from './components/Card';
import { useEffect,useState } from 'react';
import axios from 'axios';
function App() {
  const [tours,setTours]=useState([]);
  const url='https://course-api.com/react-tours-project';
  useEffect(()=>{
    axios.get('https://course-api.com/react-tours-project')
    .then(res=>setTours(res.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div className="App justify-content-center bg-light">
      <div className="container d-flex flex-column align-items-center">
        <h2>Our Tours</h2>
        <div className="line mb-5"></div>
        <Card tours={tours}/>
      </div>
    </div>
  );
}

export default App;
