import './App.css';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalsec, setTotalsec] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [intervalId, setIntervalId] = useState(null);


  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 99);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = selectedDate - now;
    
    if (difference > 0) {
      const totalSeconds = Math.floor(difference / 1000);
      setDays(Math.floor(totalSeconds / (3600 * 24)));
      setHours(Math.floor((totalSeconds % (3600 * 24)) / 3600));
      setMinutes(Math.floor((totalSeconds % 3600) / 60));
      setSeconds(totalSeconds % 60);
    } else {
      clearInterval(intervalId);
    }
  };

  const startTimer = () => {
    if (selectedDate) {
      clearInterval(intervalId);
      const id = setInterval(() => {
        calculateTimeLeft();
      }, 1000);
      setIntervalId(id);
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <div className="App">
      <div className='timer'>
        <div><h1>Countdown <span style={{ color: "purple" }}>Timer</span></h1></div>
        <div >
          <DatePicker
          className='dmy'
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy h:mm aa"
            minDate={new Date()}
            maxDate={maxDate}
            showTimeSelect
            timeIntervals={1}
          />
        </div>
        <button className='button' onClick={startTimer}>Start Timer</button>
        <div className='box'>
          <div className='days'>
            <h1>{days}</h1>
            <h3 style={{ color: "whitesmoke" }}>days</h3>
          </div>
          <div className='hours'>
            <h1>{hours}</h1>
            <h3 style={{ color: "whitesmoke" }}>Hours</h3>
          </div>
          <div className='min'>
            <h1>{minutes}</h1>
            <h3 style={{ color: "whitesmoke" }}>Minutes</h3>
          </div>
          <div className='sec'>
            <h1>{seconds}</h1>
            <h3 style={{ color: "whitesmoke" }}>Seconds</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
