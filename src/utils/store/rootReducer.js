// import { combineReducers } from 'redux';

// import globalReducer from '../reducer';
import * as homeReducers from '../../containers/Home/reducer';

// export default function createReducer(asyncReducers) {
//   return combineReducers({
//     global: globalReducer,
//     homeReducers: homeReducers,
//     ...asyncReducers,
//   });
// }

export default Object.assign(
  {},
  // globalReducer,
  homeReducers
);
