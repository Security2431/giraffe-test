import React from 'react';

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

export default MainWrapper;
