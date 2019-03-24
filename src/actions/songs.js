export let ACTIONS = {
  RATE: "songs/rate",
  CHANGE_HOVER: "songs/hover",
  RANDOMIZE: "songs/random",
  FADE: "songs/fade"
};

export const changeHover = (rating, id) => async dispatch => {
  dispatch({ type: ACTIONS.CHANGE_HOVER, payload: { rating: rating, id: id } });
  return true;
};

export const changeRate = (rating, id) => async dispatch => {
  dispatch({ type: ACTIONS.RATE, payload: { rating: rating, id: id } });
  return true;
};

export const changeRandom = random => async dispatch => {
  dispatch({ type: ACTIONS.RANDOMIZE, payload: { random: random } });
  return true;
};

export const changeFade = fade => async dispatch => {
  dispatch({ type: ACTIONS.FADE, payload: { fade: fade } });
  return true;
};
