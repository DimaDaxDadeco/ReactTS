import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { action } from '../../redux/actions/test.actions';

interface IProps {
  action: () => void;
}

class Test extends React.Component<IProps> {
  componentDidMount() {
    this.props.action();
  }

  render() {
    return <Link to="/test">Hello 2</Link>;
  }
}

const TestContainer2 = connect(
  null,
  { action },
)(Test);

export { TestContainer2 };
