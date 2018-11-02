import * as React from 'react';
import { connect } from 'react-redux';

import { action } from '../../redux/actions/test.actions';

interface IProps {
  action: () => void;
}

class Test extends React.Component<IProps> {
  componentDidMount() {
    this.props.action();
  }

  render() {
    return <div>Hello</div>;
  }
}

const TestContainer = connect(
  null,
  { action },
)(Test);

export { TestContainer };
