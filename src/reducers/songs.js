
import {ACTIONS} from '../actions/songs';

export default function stuff(state = {}, action) {
  let newState;
  switch (action.type) {
    case ACTIONS.RATE:
      return action;
    default:
      return state;
  }
}