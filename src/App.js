import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Button Component
import Button from './Components/Button.js';
//Timer
import Timer from './Utils/TimerCalculator.js';

// var timeInMinutes = .1;
// var currentTime = Date.now();
// var endTime = new Date(currentTime + timeInMinutes*60*1000);



class App extends Component {

  constructor(props) {
    super(props);

    this.startTimer = this.startTimer.bind(this);
    this.updateClock = this.updateClock.bind(this);

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

  updateClock () {
    var { intervalId, endTime } = this.state;

    // debugger;

    var remainingTime = this.getRemainingTime(endTime);
    
    console.log(intervalId);
    console.log(endTime);
    console.log(remainingTime);

    if (remainingTime.total <= 0) {
      clearInterval(intervalId);
    }

    this.setState({
      time: remainingTime
    });

    return remainingTime;
  };

  getRemainingTime (endTime) {
    var t = Date.parse(endTime) - Date.now();
    var seconds = Math.floor(t / 1000 % 60);
    var minutes = Math.floor(t / 1000 / 60 % 60);
    var hours = Math.floor(t / 1000 / 60 / 60 % 24);
    var days = Math.floor(t / 1000 / 60 / 60 / 24);
    // debugger;
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  };


  startTimer() {

    //Calulcate the end time
    var timeInMinutes = 1;
    var currentTime = Date.now();
    var endTime = new Date(currentTime + timeInMinutes*60*1000);

    //UPdate the state
    this.setState({endTime: endTime})
    console.log("STQATE");
    console.log(this.state);
    
    var remainingTime = this.updateClock(); //Update the clock
    var intervalId = setInterval(this.updateClock.bind(this), 1000);

    this.setState({
      intervalId: intervalId,
      // time: remainingTime
    });

    console.log(this.state);

  }   

  render() {

    const { time } = this.state;
    // console.log(endTime);
    // console.log(this);
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Pomodoro!</h2>
          </div>
          <Button label="Pomo Me" onClick={this.startTimer} primary={true}/>
          <Button label="Reset" primary={false}/>
          <div>
            <div>{time.minutes}</div>
            <div>{time.seconds}</div>
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
