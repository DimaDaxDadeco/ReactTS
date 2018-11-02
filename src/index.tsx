import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/App/App';
import { TestContainer } from './components/Test/test';

ReactDOM.render(
  <App>
    <TestContainer />
  </App>,
  document.getElementById('root'),
);
