import React, { Component } from "react";

class FirstExampleWithClassInterval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  tick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  
  componentDidMount() {
    console.log("I'm mounted")
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    console.log("I'm unmounted")
    clearInterval(this.interval);
  }

 

  render() {
    return <div>{this.state.count}</div>;
  }
}

export default FirstExampleWithClassInterval ;
