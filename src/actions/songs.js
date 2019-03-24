export let ACTIONS = {
  RATE: "songs/rate",
  CHANGE_HOVER: "songs/hover"
};

export const changeHover = (rating, id) => async dispatch => {
  dispatch({ type: ACTIONS.CHANGE_HOVER, payload: { rating: rating, id: id } });
  return true;
};
