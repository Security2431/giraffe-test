/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import AdPage from './AdPage';

jest.mock('./Header', () => () => 'Header');
jest.mock('./MainWrapper', () => () => 'MainWrapper');
jest.mock('./AdListItem', () => () => 'AdListItem');
jest.mock('./ErrorMessage', () => () => 'ErrorMessage');

const mockProps = {
  fetchAd: jest.fn(),
  logout: jest.fn(),
  deleteAd: jest.fn(),
  activeUser: 'Admin',
  ad: {
    _id: 'cjv7wpcgj00022y5rtui74uls',
    author_name: 'Artem',
    created_at_datetime: '2019-05-03T12:59:23+03:00',
    title: 'Title',
    description: 'Hello, World!',
  },
  isAuthenticated: true,
  error: null,
};

describe('<AdPage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter initialEntries={['/cjv7wpcgj00022y5rtui74uls']}>
        <Route path="/:adId?" render={props => <AdPage {...mockProps} {...props} />} />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
