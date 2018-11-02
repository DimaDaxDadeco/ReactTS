import { shallow } from 'enzyme';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { Test } from '../test1';

describe('<Test />', () => {
  it('should render', () => {
    const wrapper = shallow(<Test action={jest.fn} />);

    const actual = wrapper.getElement();
    const expected = <Link to="/">Hello 1</Link>;

    expect(actual).toEqual(expected);
  });
});
