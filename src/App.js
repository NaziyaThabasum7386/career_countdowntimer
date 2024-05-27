import './App.css';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
 const [days,setDays] = useState(0);
 const [hours,setHours] = useState(0);
 const [min, setMIn] = useState(0);
 const [sec, useSec] = useState(0);
 const [totalsec, setTotalsec] = useState(0);
const [selectedDate, setSelectedDate] = useState(null);




  return (
    <div className="App">
      <div className='timer'>
        <div><h1>Countdown <span style={{ color: "purple" }}>Timer</span></h1></div>
        <div className='dmy'>
          <DatePicker
           selected={selectedDate}
           onChange={ date => setSelectedDate(date)} 
           dateFormat={dd/mm/yyyy}
           minDate={new Date()}
           showYearDropdown
           scrollableMonthYearDropdown
           />
          
           </div>
        <button className='button'>Start Timer</button>
        <div className='box'>
          <div className='days'> 
            <h1>0 </h1>  
            <h3 style={{ color: "whitesmoke" }}>days</h3>
          </div>
          <div className='hours'>
            <h1>0</h1>
            <h3 style={{ color: "whitesmoke" }}>Hours</h3>
          </div>
          <div className='min'> 
            <h1>0</h1>
            <h3 style={{ color: "whitesmoke" }}>Minutes</h3>
          </div>
          <div className='sec'> 
            <h1>0</h1>
            <h3 style={{ color: "whitesmoke" }}>Seconds</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
