/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import EditPage from './EditPage';

jest.mock('./Header', () => () => 'Header');
jest.mock('./MainWrapper', () => () => 'MainWrapper');
jest.mock('./EditForm', () => () => 'EditForm');

const mockProps = {
  logout: jest.fn(),
  fetchAd: jest.fn(),
  createAd: jest.fn(),
  unsetAd: jest.fn(),
  activeUser: 'Admin',
  ad: {
    _id: '123',
    author_name: 'Artem',
    created_at_datetime: '2019-05-03T12:59:23+03:00',
    title: 'Title',
    description: 'Hello, World!',
  },
  isAuthenticated: true,
};

describe('<EditPage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter initialEntries={['/edit/123']}>
        <Route path="/edit/:adId?" render={props => <EditPage {...mockProps} {...props} />} />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
