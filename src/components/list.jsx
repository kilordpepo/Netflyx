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
import Fade from "@material-ui/core/Fade";
import { Grid } from "@material-ui/core";
import { changeHover, changeRate, changeFade } from "../actions/songs";

const styles = theme => ({
  card: {
    display: "flex",
    minWidth: "100%"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "70%"
  },
  content: {
    flex: "1 0 auto",
    paddingBottom: 0
  },
  cover: {
    width: "30%"
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
  constructor() {
    super();
    this.state = {
      fade: true
    };
  }

  handleChangeHover = (stars, songId, rating) =>
    this.props.changeHover(stars, songId);

  handleChangeRate = (stars, songId, rating) => {
    const { changeFade } = this.props;
    /*if (rating !== stars) {
      changeFade(false).then(() =>  
        setTimeout(() => {*/
    this.props.changeRate(stars, songId); //.then(res => changeFade(true));
    /*  }, 200)
      );
    } DESCOMENTAR TODO ESTE BLOQUE SI NO SE REALIZAN PRUEBAS, (HABILITA EL EFECTO DE FADE EN LOS ELEMENTOS CUANDO CAMBIA LA LISTA)*/
  };
  render = () => {
    const { classes, songs, fade } = this.props;
    return (
      <Grid container spacing={16}>
        {songs
          .sort(function(a, b) {
            return b.rating - a.rating;
          })
          .map(song => (
            <Fragment key={song.id}>
              <Grid item xs={4} />
              <Grid item xs={4}>
                <Fade in={fade} timeout={200}>
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
                        {[1, 2, 3, 4, 5].map(star => (
                          <IconButton
                            aria-label={`${star}star`}
                            key={`${star}-song.id`}
                            data-testid={`rate-${star}-${song.id}`}
                            onMouseEnter={() =>
                              song.rating < star
                                ? this.handleChangeHover(star, song.id)
                                : null
                            }
                            onMouseLeave={() =>
                              song.rating < star
                                ? this.handleChangeHover(0, song.id)
                                : null
                            }
                            onClick={() =>
                              this.handleChangeRate(star, song.id, song.rating)
                            }
                          >
                            {song.rating >= star || song.hover >= star ? (
                              <Star />
                            ) : (
                              <StarBorder />
                            )}
                          </IconButton>
                        ))}
                      </div>
                      <p hidden={true} data-testid={`rating-${song.id}`}>
                        {song.rating}
                      </p>
                    </div>
                    <CardMedia
                      className={classes.cover}
                      image={song.photo}
                      title={song.album}
                    />
                  </Card>
                </Fade>
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
  songs: state.songsReducer.songs,
  fade: state.songsReducer.fade
});

const mD = { changeHover, changeRate, changeFade };

SongsList = connect(
  mS,
  mD
)(SongsList);

export default SongsList;
