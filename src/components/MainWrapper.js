import React from 'react';
import PropTypes from 'prop-types';

const theme = {
  main: {
    padding: '15px 0',
  },
};

const MainWrapper = ({ children }) => (
  <main style={theme.main}>
    <div className="container-fluid">
      <div className="row">{children}</div>
    </div>
  </main>
);

MainWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainWrapper;
