import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
// import toodReducer from './todos/reducer';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
