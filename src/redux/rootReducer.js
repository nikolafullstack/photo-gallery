import { combineReducers } from 'redux';

import flowReducers from './list/reducers';

const rootReducer = combineReducers({
  flow: flowReducers,
});

export default rootReducer;
