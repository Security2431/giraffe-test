/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AdList from './AdList';

jest.mock('./AdListItem', () => () => 'AdListItem');
jest.mock('./AdListPagination', () => () => 'AdListPagination');

const mockProps = {
  deleteAd: jest.fn(),
  activeUser: 'Admin',
  ads: [
    {
      _id: 'cjv7wpcgj00022y5rtui74uls',
      author_name: 'Admin',
      created_at_datetime: '2019-05-03T12:59:23+03:00',
      title: 'Title',
      description: 'Hello, World!',
    },
    {
      _id: 'cjv7wv7cv00032y5r9yyvmj2x',
      author_name: 'Artem',
      created_at_datetime: '2019-05-03T12:59:23+03:00',
      title: 'Title 2',
      description: 'Hello, React!',
    },
  ],
};

describe('<AdList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AdList {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<AdList {...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
