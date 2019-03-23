import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import songsReducer from "../reducers/songs";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  card: {
    display: "flex",
    minWidth: "100%"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    minWidth: "70%"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151,
    minWidth: "30%"
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: theme.spacing.unit
  },
  title: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  subtitle: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

class SongsList extends Component {
  render = () => {
    const { classes, theme, songs } = this.props;

    return (
      <Grid container spacing={16}>
        {songs.map(song => (
          <Fragment key={song.id}>
            <Grid item xs={4} />
            <Grid item xs={4}>
              <Card className={classes.card}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography
                      component="h5"
                      variant="h5"
                      className={classes.title}
                    >
                      {song.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      className={classes.subtitle}
                    >
                      {song.artist}
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}>
                    <IconButton aria-label="Previous">
                      {theme.direction === "rtl" ? (
                        <SkipNextIcon />
                      ) : (
                        <SkipPreviousIcon />
                      )}
                    </IconButton>
                    <IconButton aria-label="Play/pause">
                      <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>
                    <IconButton aria-label="Next">
                      {theme.direction === "rtl" ? (
                        <SkipPreviousIcon />
                      ) : (
                        <SkipNextIcon />
                      )}
                    </IconButton>
                  </div>
                </div>
                <CardMedia
                  className={classes.cover}
                  image={song.photo}
                  title={song.album}
                />
              </Card>
            </Grid>
            <Grid item xs={4} />
          </Fragment>
        ))}
      </Grid>
    );
  };
}

SongsList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

SongsList = withStyles(styles, { withTheme: true })(SongsList);

const mS = state => ({
  songs: state.songsReducer.songs
});

const mD = {};

SongsList = connect(
  mS,
  mD
)(SongsList);

export default SongsList;
