import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import configureStore from './store';
import * as serviceWorker from './serviceWorker';
import mockdataToStorage from './utils/mockdata-to-storage';

import 'bootstrap/dist/css/bootstrap.min.css';

const rootEl = document.getElementById('root');
const store = configureStore();

mockdataToStorage();

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    rootEl,
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}

serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
