import { applyMiddleware, createStore } from 'redux';
// import reduxDevTools from ;
// import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
// import createHistory from 'history/createBrowserHistory';

import { reducers } from '../modules/reducers';
import { saga } from '../saga/saga';
import { state as initialState } from '../state/state';
import { IState } from '../state/state.d';

// export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

let middleware = applyMiddleware(
  sagaMiddleware,
  // routerMiddleware(history)
);

if (process.env.NODE_ENV === 'development') {
  // tslint:disable-next-line:no-var-requires
  middleware = require('redux-devtools-extension').composeWithDevTools(
    middleware,
  );
}

const combinedReducer = (state: IState, action: any) => ({
  ...reducers(state, action),
});

const store = createStore(combinedReducer, initialState, middleware);

sagaMiddleware.run(saga);

export { store };
