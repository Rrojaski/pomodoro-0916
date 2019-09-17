import React, { Component } from "react";

import "./Timer.module.scss";

// Redux
import { connect } from "react-redux";
import {
  startTimer,
  setCurrentTime,
  setTimerRunning
} from "../../actions/Actions";

// Components
import Text from "../Text/Text";
import { Col } from "../Grid/Grid";
import Button from "../Button/Button";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.timer = this.timer.bind(this);
  }
  timer() {
    if (this.props.timerRunning == true) {
      clearInterval(this.props.timerId);
      this.props.setCurrentTime("25 : 00");
      this.props.setTimerRunning(false);
    } else {
      this.props.cycle === "Session"
        ? this.props.startTimer(this.props.workTime)
        : this.props.startTimer(this.props.breakTime);
    }
  }
  render() {
    return (
      <div className="timer u-text-center u-margin-bottom-md">
        <Text className="count-down" size="lg">
          {this.props.currentTime}
        </Text>
        <Text>{this.props.cycle}</Text>
        <Button onClick={this.timer} type="play">
          ⏯️
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentTime: state.allReducer.currentTime,
    timerId: state.allReducer.timerId,
    cycle: state.allReducer.cycle,
    timerRunning: state.allReducer.timerRunning,
    workTime: state.allReducer.workTime,
    breakTime: state.allReducer.breakTime
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentTime: props => {
      dispatch(setCurrentTime(props));
    },
    setTimerRunning: props => {
      dispatch(setTimerRunning(props));
    }
  };
};

const ReduxTimer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);

export default ReduxTimer;
