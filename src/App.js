import React, { Component } from "react";
import SongsList from "./components/list";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Top 10 Netflyx Songs List</p>
        </header>
        <SongsList />
      </div>
    );
  }
}

export default App;
