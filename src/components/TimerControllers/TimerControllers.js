import React, { Component } from "react";

// Components
import ReduxWorkControllers from "../WorkControllers/WorkControllers";
import ReduxBreakControllers from "../BreakControllers/BreakControllers";

class TimerControllers extends Component {
  render() {
    return (
      <div className="timer-controllers u-text-center u-margin-bottom-md">
        <ReduxWorkControllers />
        <ReduxBreakControllers />
      </div>
    );
  }
}

export default TimerControllers;
