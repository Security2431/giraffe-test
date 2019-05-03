/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';

jest.mock('./Header', () => () => 'Header');
jest.mock('./AdList', () => () => 'AdList');
jest.mock('./MainWrapper', () => () => 'MainWrapper');
jest.mock('./ErrorMessage', () => () => 'ErrorMessage');

const mockProps = {
  isAuthenticated: false,
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
  auth: jest.fn(),
  recieveAuth: jest.fn(),
  logout: jest.fn(),
  fetchAllAds: jest.fn(),
  deleteAd: jest.fn(),
  error: null,
};

describe('<HomePage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter initialEntries={['/']}>
        <Route path="/?" render={props => <HomePage {...mockProps} {...props} />} />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
