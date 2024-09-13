import React, { Component } from "react";
class Person extends Component {
  constructor() {
    super();
    // this.props=props;
    this.state = {
      name: "WsCube Technology ",
      age: "22",
    };
  }
  nameChangeHandler() {
    console.log(this.state);
    this.setState({ name: "shivam" }
    );
  }
  render() {
    return (
      <div>
        <h1>
          <i>
            Dear {this.state.name},{this.state.age} year Welcome to WsCube Tech
            <br></br>
            <buttton onClick={this.nameChangeHandler.bind(this)}>
              Click Me!
            </buttton>
          </i>
        </h1>
      </div>
    );
  }
}

export default Person;
