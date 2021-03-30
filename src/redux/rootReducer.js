import { combineReducers } from 'redux';

import flowReducers from './flow/reducers';

const rootReducer = combineReducers({
  flow: flowReducers,
});

export default rootReducer;
