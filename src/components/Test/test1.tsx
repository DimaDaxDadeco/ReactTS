import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { action } from '../../redux/actions/test.actions';

interface IProps {
  action: () => void;
}

export class Test extends React.Component<IProps> {
  componentDidMount() {
    this.props.action();
  }

  render() {
    return <Link to="/">Hello 1</Link>;
  }
}

const TestContainer = connect(
  null,
  { action },
)(Test);

export { TestContainer };
