import React, { Component } from "react";

class ClassCounterOne extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `clicked ${this.state.count} times`;
      console.log("updating title");
    }
  }

  render() {
    return (
      <div>
        {/* This is a good example how linking components that are not related under componentDidUpdate umbrella is not the best option.
 Check the console to see how "updating title" shows up even when you type on input          */}
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          clicked {this.state.count} times
        </button>
        <br />
        {this.state.count}
      </div>
    );
  }
}

export default ClassCounterOne;
