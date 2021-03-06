import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import {
  setTimerId,
  setCycle,
  setTimerRunning,
  setCurrentTime
} from "./actions/Actions";

// Components
import Timer from "./components/Timer/Timer";
import TimerControllers from "./components/TimerControllers/TimerControllers";
import Sound from "./components/Sound/Sound";
import { Row, Col } from "./components/Grid/Grid";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.setSound = this.setSound.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.setCurrentTime = this.setCurrentTime.bind(this);
    this.setTimerRunning = this.setTimerRunning.bind(this);
  }

  // Make Sound component
  setSound = sound => {
    this.setState({
      sound: sound
    });
  };
  // Refactor
  // **********
  setCurrentTime(obj) {
    this.setState({
      currentTime: obj
    });
  }
  setTimerRunning(obj) {
    this.setState({
      timerRunning: obj
    });
  }

  // **********

  startTimer = duration => {
    console.log("startTimer");
    console.log(duration);
    this.props.setTimerRunning(true);
    let time = duration * 60;
    let minutes;
    let seconds;
    let runningTimer = setInterval(() => {
      this.props.setTimerId(runningTimer);

      minutes = Math.floor(time / 60);
      seconds = time - minutes * 60;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      console.log(`${minutes} : ${seconds}`);
      this.props.setCurrentTime(`${minutes} : ${seconds}`);
      if (time == 0) {
        if (this.props.cycle === "Session") {
          console.log("Switching to break");
          // @Desc
          // If Session ran out switch to break
          this.props.setCycle("Break");
          this.props.setTimerRunning(false);
          clearInterval(this.props.timerId);
          this.startTimer(this.props.breakTime);
        } else {
          console.log("Switching to session");
          this.props.setCycle("Session");
          this.props.setTimerRunning(false);
          clearInterval(this.props.timerId);
          this.startTimer(this.props.workTime);
        }
      }
      time--;
    }, 1000);
  };
  render(props) {
    return (
      <div className="App">
        <Row>
          <h1 className="u-margin-bottom-sm">POMODORO CLOCK</h1>
          <Col size="col-1-of-2">
            <Timer startTimer={this.startTimer} />
          </Col>
          <Col size="col-1-of-2">
            <TimerControllers />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cycle: state.allReducer.cycle,
    currentTime: state.allReducer.currentTime,
    timerId: state.allReducer.timerId,
    workTime: state.allReducer.workTime,
    breakTime: state.allReducer.breakTime
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTimerId: props => {
      dispatch(setTimerId(props));
    },
    setCycle: props => {
      dispatch(setCycle(props));
    },
    setTimerRunning: props => {
      dispatch(setTimerRunning(props));
    },
    setCurrentTime: props => {
      dispatch(setCurrentTime(props));
    }
  };
};

const ReduxApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ReduxApp;

/*

Refactor


          timerRunning={this.state.timerRunning}
          timerId={this.state.timerId}
          currentTime={this.state.currentTime}
          setCurrentTime={this.setCurrentTime}
          setTimerRunning={this.setTimerRunning}
          cycle={this.state.cycle}
          
          workTime={this.state.workTime}
          breakTime={this.state.breakTime}




                    workTime={this.state.workTime}
          breakTime={this.state.breakTime}
          setCurrentTime={this.setCurrentTime}
          incrementWorkTime={this.incrementWorkTime}
          decrementWorkTime={this.decrementWorkTime}
          incrementBreakTime={this.incrementBreakTime}
          decrementBreakTime={this.decrementBreakTime}


          <Sound setSound={this.setSound} sound={this.state.sound} />

*/
