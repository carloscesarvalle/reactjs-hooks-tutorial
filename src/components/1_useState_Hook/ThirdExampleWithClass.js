import React, { Component } from "react";

// In this example we see how we have to split document.title into two cycle methods: componentDidMount and componentDidUpdate 

class ThirdExampleWithClass extends Component {
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
  // We use this conditional rendering to optimize performance. Without this conditional every single change on this.state.name would update the DOM
    if (prevState.count !== this.state.count) {
      document.title = `clicked ${this.state.count} times`;
      console.log("updating title");
    }
  }

  render() {
    return (
      <div>
        {/* This is a good example how linking components that are not related under componentDidUpdate is not the best option.
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

export default ThirdExampleWithClass;
