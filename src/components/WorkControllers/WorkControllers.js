import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { incrementWorkTime, decrementWorkTime } from "../../actions/Actions";

// Components
import Button from "../Button/Button";
import Text from "../Text/Text";

class WorkControllers extends Component {
  constructor(props) {
    super(props);
    this.handleWorkIncrement = this.handleWorkIncrement.bind(this);
    this.handleWorkDecrement = this.handleWorkDecrement.bind(this);
  }
  handleWorkIncrement() {
    if (this.props.workTime < 60) {
      this.props.incrementWorkTime(this.props.workTime);
    }
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.workTime);
    }
  }
  handleWorkDecrement() {
    if (this.props.workTime > 1) {
      this.props.decrementWorkTime(this.props.workTime);
    }
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.workTime);
    }
  }
  render(props) {
    return (
      <div className="controller u-margin-bottom-sm">
        <Text>Session Length</Text>
        <br />
        <Button onClick={this.handleWorkIncrement}> + </Button>
        <Text>{this.props.workTime}</Text>
        <Button onClick={this.handleWorkDecrement}> - </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToPropsSession...");
  return { workTime: state.allReducer.workTime };
};
const mapDispatchToProps = dispatch => {
  console.log("mapDispatchToPropsSession...");
  return {
    incrementWorkTime: props => {
      dispatch(incrementWorkTime(props));
    },
    decrementWorkTime: props => {
      dispatch(decrementWorkTime(props));
    }
  };
};

const ReduxWorkControllers = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkControllers);

export default ReduxWorkControllers;
