import './App.css';
import Card from './components/Card';
import { useEffect,useState } from 'react';
import axios from 'axios';
function App() {
  const [tours,setTours]=useState([]);
  const removeTour=(id)=>{
    const updatedTours=tours.filter((tour)=>tour.id!==id);
    setTours(updatedTours);
  }
  const getTours=()=>{
    axios.get('https://course-api.com/react-tours-project')
    .then(res=>setTours(res.data))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    getTours()
  },[])
  const refresh=()=>{
    getTours();
  }
  return (
    <div className="App justify-content-center">
      <div className="container d-flex flex-column align-items-center">
        <h2>Our Tours</h2>
        <div className="line mb-5"></div>
        {
          tours.length?
          <Card tours={tours} removeTour={removeTour} />:
          <div>
              <h5>No Tours Left</h5>
              <button onClick={()=>refresh()} type="button" className='btn' style={{color:'hsl(205, 78%, 60%)' ,outline:'hsl(205, 78%, 60%) solid 0.01rem'}} >Refresh</button>
          </div>
        }
        
      </div>
    </div>
  );
}

export default App;
