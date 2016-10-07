import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Button Component
import Button from './Components/Button.js';
//Timer
import Timer from './Utils/TimerCalculator.js';

var timeInMinutes = 1;
var currentTime = Date.now();
var endTime = new Date(currentTime + timeInMinutes*60*1000);

const startTimer = () => {
  Timer(endTime);
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'total': 0,
      'days': 0,
      'hours': 0,
      'minutes': 0,
      'seconds': 0
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Pomodoro!</h2>
          </div>
          <Button label="Pomo Me" onClick={startTimer} primary={true}/>
          <Button label="Reset" primary={false}/>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </MuiThemeProvider >
    );
  }
}

export default App;
