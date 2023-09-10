import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; 

function App() {
  const [breakfastGlucose, setBreakfastGlucose] = useState(0);
  const [lunchGlucose, setLunchGlucose] = useState(0);
  const [dinnerGlucose, setDinnerGlucose] = useState(0);
  const [glucoseLevel, setGlucoseLevel] = useState(0);
  const [lGlucose, setLGlucose] = useState(0);
  const [dGlucose, setDGlucose] = useState(0);
  const [normBG, setNormBG] = useState(0);
  const [BGCorrection, setBGCorrection] = useState(0);
  const [insulinB, setInsulinB] = useState(0);
  const [insulinD, setInsulinD] = useState(0);
  const [insulinL, setInsulinL] = useState(0);
  const [LongActing, setLongActing] = useState(0);
  const [LongActingDay, setLongActingDay] = useState(0);
  const [bloodSugarL, setBloodSugarL] = useState(0);
  const [bloodSugarB, setBloodSugarB] = useState(0);
  const [bloodSugarD, setBloodSugarD] = useState(0);
  const [days, setDays] = useState(0);

  function handleBreakfastChange(event){
    

    setBreakfastGlucose(event.target.value)
  }

  function handleLunchChange(event){
    

    setLunchGlucose(event.target.value)
  }

  async function handleClick(event){
    const response = await fetch("127.0.0.1:8000/calculator", {
      method: "POST",
      body: JSON.stringify({"glucoseLevel": glucoseLevel,
      "breakfastGlucose": breakfastGlucose,
      "lunchGlucose": lunchGlucose,
      "dinnerGlucose": dinnerGlucose,
      "normBG": normBG,
      "BGCorrection": BGCorrection,
      "insulinB": insulinB,
      "insulinD": insulinD,
      "insulinL": insulinL,
      "LongActing": LongActing,
      "LongActingDay": LongActingDay,
      "bloodSugarL": bloodSugarL,
      "bloodSugarB": bloodSugarB,
      "bloodSugarD": bloodSugarD,
      "days": days}),
      });
    const result = await response.json();
  }


  return (
    <div className="App">
      <input onChange={(event) => setBreakfastGlucose(event.target.value)} type="number"></input>
      <input onChange={(event) => setLunchGlucose(event.target.value)} type="number"></input>
      <input onChange={(event) => setDinnerGlucose(event.target.value)} type="number"></input>
      <input onChange={(event) => setGlucoseLevel(event.target.value)} type="number"></input>
      <input onChange={(event) => setNormBG(event.target.value)} type="number"></input>
      <input onChange={(event) => setInsulinB(event.target.value)} type="number"></input>
      <input onChange={(event) => setInsulinD(event.target.value)} type="number"></input>
      <input onChange={(event) => setInsulinL(event.target.value)} type="number"></input>
      <input onChange={(event) => setLongActing(event.target.value)} type="number"></input>
      <input onChange={(event) => setLongActingDay(event.target.value)} type="number"></input>
      <input onChange={(event) => setBloodSugarL(event.target.value)} type="number"></input>
      <input onChange={(event) => setBloodSugarB(event.target.value)} type="number"></input>
      <input onChange={(event) => setBloodSugarD(event.target.value)} type="number"></input>
      <input onChange={(event) => setDays(event.target.value)} type="number"></input>
      <input onChange={(event) => setBGCorrection(event.target.value)} type="number"></input>
      <button onClick={handleClick}>submit</button>
    </div>
  );
}

export default App;
