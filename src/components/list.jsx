import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import StarBorder from "@material-ui/icons/StarBorderTwoTone";
import Star from "@material-ui/icons/Star";
import { changeHover } from "../actions/songs";
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
  handleChangeHover = (rating, songId) => {
    this.props.changeHover(rating, songId);
  };
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
                    <IconButton
                      aria-label="1star"
                      onMouseEnter={() => this.handleChangeHover(1, song.id)}
                      onMouseLeave={() => this.handleChangeHover(0, song.id)}
                    >
                      {song.rating >= 1 || song.hover >= 1 ? (
                        <Star />
                      ) : (
                        <StarBorder />
                      )}
                    </IconButton>
                    <IconButton
                      aria-label="2star"
                      onMouseEnter={() => this.handleChangeHover(2, song.id)}
                      onMouseLeave={() => this.handleChangeHover(0, song.id)}
                    >
                      {song.rating >= 2 || song.hover >= 2 ? (
                        <Star />
                      ) : (
                        <StarBorder />
                      )}
                    </IconButton>
                    <IconButton
                      aria-label="3star"
                      onMouseEnter={() => this.handleChangeHover(3, song.id)}
                      onMouseLeave={() => this.handleChangeHover(0, song.id)}
                    >
                      {song.rating >= 3 || song.hover >= 3 ? (
                        <Star />
                      ) : (
                        <StarBorder />
                      )}
                    </IconButton>
                    <IconButton
                      aria-label="4star"
                      onMouseEnter={() => this.handleChangeHover(4, song.id)}
                      onMouseLeave={() => this.handleChangeHover(0, song.id)}
                    >
                      {song.rating >= 4 || song.hover >= 4 ? (
                        <Star />
                      ) : (
                        <StarBorder />
                      )}
                    </IconButton>
                    <IconButton
                      aria-label="5star"
                      onMouseEnter={() => this.handleChangeHover(5, song.id)}
                      onMouseLeave={() => this.handleChangeHover(0, song.id)}
                    >
                      {song.rating >= 5 || song.hover >= 5 ? (
                        <Star />
                      ) : (
                        <StarBorder />
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

const mD = { changeHover };

SongsList = connect(
  mS,
  mD
)(SongsList);

export default SongsList;
