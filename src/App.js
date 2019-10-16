import React, {useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const [time,setTime] = useState(0);

useEffect(()=>{
  const today = new Date();
  const time= {
    hours:(function(){
      console.log(today.getHours())
      return today.getHours()
      
    })(),
    minutes:(function(){
      console.log(today.getMinutes())
      return today.getMinutes()
    })(),
    seconds:(function(){
      return today.getSeconds()
      
    })(),
  }

  const {hours,minutes,seconds} = time;

  setInterval(setTime(time),1000);



})

  return (
    <div className="App">
      <header className="App-header">
       <h1 id="clock">{time.hours}:{time.minutes}:{time.seconds}</h1>
      </header>
    </div>
  );
}

export default App;
