import React, { Component } from "react";

// Components
import WorkControllers from "../WorkControllers/WorkControllers";
import BreakControllers from "../BreakControllers/BreakControllers";

class TimerControllers extends Component {
  render() {
    return (
      <div className="timer-controllers u-text-center u-margin-bottom-md">
        <WorkControllers />
        <BreakControllers />
      </div>
    );
  }
}

export default TimerControllers;
