import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; 

function App() {
  const [breakfastGlucose, setBreakfastGlucose] = useState(0);
  const [lunchGlucose, setLunchGlucose] = useState(0);
  const [dinnerGlucose, setDinnerGlucose] = useState(0);

  function handleBreakfastChange(event){
    

    setBreakfastGlucose(event.target.value)
  }

  function handleLunchChange(event){
    

    setLunchGlucose(event.target.value)
  }


  return (
    <div className="App">
      <input onChange={handleBreakfastChange} type="number"></input>
      <input onChange={(event) => setLunchGlucose(event.target.value)} type="number"></input>
      <input onChange={(event) => setDinnerGlucose(event.target.value)} type="number"></input>
    </div>
  );
}

export default App;
