/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AdListPagination from './AdListPagination';

const mockProps = {
  pageSize: 5,
  adsCount: 100,
  currentPage: jest.fn(),
};

describe('<AdListPagination />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AdListPagination {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<AdListPagination {...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
