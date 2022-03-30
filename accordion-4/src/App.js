import './App.css';
import Accordion from './components/Accordion';
import questions from './components/questions'
function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>questions and answers about login</h2>
        <div>
          {
            questions.map((question)=>{
            return(
              <Accordion question={question} key={question.id}/>
            )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
