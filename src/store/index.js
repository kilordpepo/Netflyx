
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export default function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
  );
}