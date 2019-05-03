/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from './Header';

jest.mock('./AdListItem', () => () => 'AdListItem');
jest.mock('./AdListPagination', () => () => 'AdListPagination');

const mockProps = {
  auth: jest.fn(),
  logout: jest.fn(),
  activeUser: 'Admin',
  isAuthenticated: true,
};

describe('<Header />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Header {...mockProps} />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Header {...mockProps} />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
