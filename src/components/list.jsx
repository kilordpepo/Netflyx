import React, { Component } from "react";
import { connect } from "react-redux";

class SongsList extends Component {
  render = () => {
    return <p>+</p>;
  };
}

const mS = state => ({});

const mD = {};

SongsList = connect(
  mS,
  mD
)(SongsList);

export default SongsList;
