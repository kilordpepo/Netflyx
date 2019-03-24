import React, { Component } from "react";
import SongsList from "./components/list";
import "./App.css";
import { Button, withStyles } from "@material-ui/core";

const styles = theme => ({
  random: {
    marginLeft: "2%",
    backgroundColor: "#98FB98",
    "&:hover": {
      backgroundColor: "#50C878"
    }
  }
});
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <p>Top 10 Netflyx Songs List</p>
          <Button variant="contained" className={classes.random}>
            RANDOM RATING
          </Button>
        </header>
        <SongsList />
      </div>
    );
  }
}
export default withStyles(styles)(App);
