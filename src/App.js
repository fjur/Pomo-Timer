import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Button Component
import Button from './Components/Button.js';
import TimeButton from './Components/TimeButton.js';

//Timer
import Timer from './Utils/TimerCalculator.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.startTimer = this.startTimer.bind(this);
    this.updateClock = this.updateClock.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.getTime = this.getTime.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.state = {
      intervalId: null,
      timeInMinutes: 0,
      endTime: 0,
      time: {
        total: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }
  }

  updateTime (timeInMinutes) {
    var time = this.getTime(timeInMinutes * 60 * 1000)
    this.setState({
      timeInMinutes: timeInMinutes,
      time: time
    });
  }

  stopTimer () {
    var { intervalId, time } = this.state;
    var timeInMinutes = time.total / 60 / 1000;

    this.setState({
      intervalId: null,
      timeInMinutes: timeInMinutes
    });
    clearInterval(intervalId);
  }


  startTimer() {
    //Calulcate the end time
    var timeInMinutes = this.state.timeInMinutes;
    var currentTime = Date.now();
    var endTime = new Date(currentTime + timeInMinutes*60*1000);

    //Update the state
    this.setState({endTime: endTime}) //This is useless, don't need to store...

    this.updateClock(endTime); //Update the clock
    var intervalId = setInterval(this.updateClock.bind(this, endTime), 1000);

    this.setState({
      intervalId: intervalId,
    });
  } 

  updateClock (endTime) {
    var { intervalId } = this.state;

    var remainingTime = this.getRemainingTime(endTime);

    this.setState({
      time: remainingTime
    });

    if (remainingTime.total <= 0) {
      clearInterval(intervalId);
    }
  };

  getRemainingTime (endTime) {
    var t = Date.parse(endTime) - Date.now();
    return this.getTime(t);
  };

  getTime(time) {
    var seconds = Math.floor(time / 1000 % 60);
    var minutes = Math.floor(time / 1000 / 60 % 60);
    var hours = Math.floor(time / 1000 / 60 / 60 % 24);
    var days = Math.floor(time / 1000 / 60 / 60 / 24);

    return {
      total: time,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  

  render() {
    const { time } = this.state;
 
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Pomodoro!</h2>
          </div>
          <Button label="Pomo Me" onClick={this.startTimer} primary={true}/>
          <Button label="Stop" onClick={this.stopTimer} primary={false}/>
          <TimeButton time={25} onClick={this.updateTime}/>
          <TimeButton time={50} onClick={this.updateTime}/>

          <div>
            <div>Minutes: {time.minutes}</div>
            <div>Seconds: {time.seconds}</div>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </MuiThemeProvider >
    );
  }
}

export default App;
