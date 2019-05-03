/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import EditForm from './EditForm';

jest.mock('cuid');

// Return a fixed timestamp when moment().fromNow() is called
jest.mock('moment', () => () => ({ format: () => '' }));

const mockProps = {
  activeUser: 'Admin',
  ad: {
    _id: 'cjv7wpcgj00022y5rtui74uls',
    author_name: 'Admin',
    created_at_datetime: '2019-05-03T12:59:23+03:00',
    title: 'Title',
    description: 'Hello, World!',
  },
  onSubmit: jest.fn(),
};

describe('<EditForm />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EditForm {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<EditForm {...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
