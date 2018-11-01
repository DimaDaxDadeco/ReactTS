import * as React from 'react';
import * as s from './app.less';

interface IProps {
  p1: string;
}

interface IState {
  st1: number;
  st2: number;
}

class App extends React.Component<IProps, IState> {
  state = {
    st1: 1,
    st2: 2,
  };

  method = (pram: number) => {
    this.setState({
      st1: pram,
    });
  }

  render() {
    return (
      <div className={s.container}>
        {this.props.children} {this.props.p1}
      </div>
    );
  }
}

export { App };
