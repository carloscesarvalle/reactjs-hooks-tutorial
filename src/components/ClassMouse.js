import React, { Component } from "react";
//This is a good example why a component needs to unmount in order to stop executing in the background.

class ClassMouse extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePosition = (event) => {
    this.setState({ x: event.clientX, y: event.clientY });
  };

  componentDidMount() {
    console.log("component mounting");
    window.addEventListener("mousemove", this.logMousePosition);
  }

  componentWillUnmount() {
    console.log("component unmounting");
    window.removeEventListener("mousemove", this.logMousePosition);
  }

  render() {
    return (
      <div>
        x - {this.state.x} y - {this.state.y}
      </div>
    );
  }
}

export default ClassMouse;
