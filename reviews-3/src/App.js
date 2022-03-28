import './App.css';
import data from './components/data';
import ReviewCard from './components/ReviewCard';
function App() {
  return (
    <div className="App">
      <h2 className='title'>Our Reviews</h2>
      <div className="line"></div>
      <ReviewCard reviews={data}/>
    </div>
  );
}

export default App;
