import React, { Component } from 'react';

class Output extends Component {
  render() {
    let classNames = "output";
    // If the foobar prop was passed, add an extra class to the div
    if (this.props.foobar) {
      classNames = classNames.concat(" foobar")
    }
    return (
      <div className={classNames}></div>
    );
  }
}

export default Output;
