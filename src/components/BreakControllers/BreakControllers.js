import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { incrementBreakTime, decrementBreakTime } from "../../actions/Actions";

// Components
import Button from "../Button/Button";
import Text from "../Text/Text";

import "./BreakControllers.module.scss";

class BreakControllers extends Component {
  constructor(props) {
    super(props);
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
  }
  handleBreakIncrement() {
    if (this.props.breakTime < 25) {
      this.props.incrementBreakTime(this.props.breakTime);
    }
  }
  handleBreakDecrement() {
    if (this.props.breakTime > 1) {
      this.props.decrementBreakTime(this.props.breakTime);
    }
  }
  render() {
    return (
      <div className="controller u-center">
        <Button onClick={this.handleBreakIncrement}> + </Button>
        <Text>{this.props.breakTime}</Text>
        <Button onClick={this.handleBreakDecrement}> - </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { breakTime: state.allReducer.breakTime };
};
const mapDispatchToProps = dispatch => {
  return {
    incrementBreakTime: props => {
      dispatch(incrementBreakTime(props));
    },
    decrementBreakTime: props => {
      dispatch(decrementBreakTime(props));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreakControllers);
