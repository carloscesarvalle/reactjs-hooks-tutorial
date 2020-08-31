import React, { Component } from "react";

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.incrementCount()}>count +1</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default ClassCounter;
