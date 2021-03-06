import React from 'react';
import PropTypes from 'prop-types';

const theme = {
  alert: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    right: 0,
    margin: 0,
    color: '#ffffff',
    backgroundColor: '#ca2a39',
    borderColor: '#e2162c',
    zIndex: 9999,
  },
  close: {
    color: 'inherit',
  },
};

class ErrorMessage extends React.Component {
  static propTypes = {
    error: PropTypes.string,
  };

  static defaultProps = {
    error: null,
  };

  state = {
    visible: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ visible: true });

      // Auto close reactstrap alerts
      setTimeout(() => {
        this.onDismiss();
      }, 4000);
    }
  }

  onDismiss = () => {
    this.setState({ visible: false });
  };

  render() {
    const { error } = this.props;
    const { visible } = this.state;

    return (
      <div
        className={`alert alert-danger fade ${visible && 'show'}`}
        style={theme.alert}
        role="alert"
      >
        <div className="container">
          {error}
          <button
            type="button"
            aria-label="Close"
            className="close"
            style={theme.close}
            onClick={this.onDismiss}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    );
  }
}

export default ErrorMessage;
