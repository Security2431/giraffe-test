import React from 'react';

const theme = {
  main: {
    padding: '15px 0',
  },
};

// eslint-disable-next-line
class MainWrapper extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <main style={theme.main}>
        <div className="container-fluid">
          <div className="row">{children}</div>
        </div>
      </main>
    );
  }
}

export default MainWrapper;
