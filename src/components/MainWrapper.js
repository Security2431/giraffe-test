import React from "react";

const theme = {
  main: {
    padding: "15px 0"
  }
};

class MainWrapper extends React.Component {
  render() {
    return (
      <main style={theme.main}>
        <div className="container">
          <div className="row">{this.props.children}</div>
        </div>
      </main>
    );
  }
}

export default MainWrapper;
