import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../redux/store/store';

interface IProps {
  children: React.ReactNode;
}

const App = ({ children }: IProps) => (
  <Provider store={store}>
    <div>{children}</div>
  </Provider>
);

export { App };
