import React, { Component } from 'react';

// Components
import Button from '../Button/Button';

class Sound extends Component {
    constructor(props) {
      super(props);
      this.toggleSound = this.toggleSound.bind(this);
    }
    toggleSound() {
      console.log("click");
      this.props.sound === "on"
        ? this.props.setSound("off")
        : this.props.setSound("on");
    }
    render() {
      return (
        <div className='u-text-center'>
          <Button type='button-secondary' onClick={this.toggleSound}>SOUND</Button>
        </div>
      );
    }
  }
  

  export default Sound;