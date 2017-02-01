import React, { Component } from 'react';
import Output from './Output';
import Input from './Input';

class App extends Component {
  // App is the main component, state lives here
  constructor(props) {
    super(props);
    this.state = {
      foobar: false,
    };
  }

  handleClick() {
    // When the button gets clicked, swap foobar
    const newFoobar = !this.state.foobar
    this.setState({
      foobar: newFoobar,
    })
  }

  render() {
    return (
      <div>
        {/* Pass state into the output object as props */}
        <Output foobar={this.state.foobar}/>
        {/* Pass a func into the input that calls back to App's func */}
        <Input handleClick={() => this.handleClick()}/>
      </div>
    );
  }
}

export default App;
