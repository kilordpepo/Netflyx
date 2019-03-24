import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, withStyles } from "@material-ui/core";
import "./App.css";
import { changeRate, changeRandom, changeFade } from "./actions/songs";
import SongsList from "./components/list";

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
  constructor() {
    super();
    this.state = {
      interval: null
    };
  }

  handleStartRandomRating = () => {
    const { changeRandom } = this.props;
    changeRandom(false);
    var interval = setInterval(
      this.randomize,
      Math.floor(Math.random() * 5001)
    );
    this.setState({ interval: interval });
  };

  randomize = () => {
    const { changeRate, changeFade } = this.props;
    let stars = Math.floor(Math.random() * 5 + 1);
    let id = Math.floor(Math.random() * 10 + 1);
    changeFade(false).then(() =>
      setTimeout(() => {
        changeRate(stars, id).then(res => changeFade(true));
      }, 200)
    );
  };

  handleStopRandomRating = () => {
    const { changeRandom } = this.props;
    const { interval } = this.state;
    changeRandom(true);
    clearInterval(interval);
  };

  render() {
    const { classes, random } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <p>Top 10 Netflyx Songs List</p>
          <Button
            variant="contained"
            className={classes.random}
            onClick={
              random
                ? this.handleStartRandomRating
                : this.handleStopRandomRating
            }
          >
            RANDOM RATING
          </Button>
        </header>
        <SongsList />
      </div>
    );
  }
}
const mS = state => ({
  random: state.songsReducer.random
});

const mD = { changeRate, changeRandom, changeFade };

App = connect(
  mS,
  mD
)(App);
export default withStyles(styles)(App);
