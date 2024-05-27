import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className='timer'>
        <div><h1>Countdown <span style={{ color: "purple" }}>Timer</span></h1></div>
        <div className='dmy'>
          < FontAwesomeIcon icon={faCalendarAlt} className='calendar-icon' />
          <input type='date' className='date-input' />
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
