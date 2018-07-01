import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import artists from "./artists_reducer";

const rootReducer = combineReducers({
  artists,
  form: formReducer
});

export default rootReducer;
