import React, { Component } from "react";
import Header from "./Header";
import MemeGenerator from "./memegenerator";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default App;
