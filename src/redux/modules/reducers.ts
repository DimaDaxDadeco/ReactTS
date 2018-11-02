import { createReducer } from 'redux-act';

import { state } from '../state/state';

const reducers = createReducer({}, state);

export { reducers };
