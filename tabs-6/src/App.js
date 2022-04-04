import axios from "axios";
import { useEffect ,useState} from "react";

function App() {
  const[jobs,setJobs]=useState([]);
  const[loading,setLoading]=useState(true);
  const[value,setValue]=useState(0);
  useEffect( ()=>{
    axios.get('https://course-api.com/react-tabs-project')
    .then(response=>{setJobs(response.data);setLoading(false)})
  },[]);
  if(loading){
    return(
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  const {title,dates,duties,company}=jobs[value];
  return (
    <div className="App">
      <div className="title">
        <h1>Experience</h1>
        <div className="line"></div>
      </div>
      <div className="content-control">
        <div className="buttons-container">
          {
            jobs.map((job,index)=>{return(<button onClick={()=>setValue(index)} key={index} className={index === value ? 'active':''}>{job.company}</button>)})
          }
        </div>
        <div className="info">
          <h3>{title}</h3>
          <h4 className="company">{company}</h4>
          <p className="date">{dates}</p>
          {
            duties.map((duty,index)=><p key={index} className="duty">{duty}</p>)
          }
        </div>
      </div>
      <button className="info-btn">More Info</button>
    </div>
  );
}

export default App;
