import React, { Component } from 'react';

class Input extends Component {
  handleClick() {
    // Call the function that was passed in as a prop
    this.props.handleClick();
  }

  render() {
    return (
      <div className="button">
        <button onClick={() => this.handleClick()}>
          press me
        </button>
      </div>
    );
  }
}

export default Input;
