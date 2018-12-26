import React, { Component } from "react";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    name: "Nikolay"
  };

  switchNameHandler = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserOutput name={this.state.name} />
        <UserInput
        changedName={this.switchNameHandler}
        currentName={this.state.name} 
        />
      </div>
    );
  }
}

export default App;
