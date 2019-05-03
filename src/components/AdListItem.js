import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

const theme = {
  Card: {
    marginBottom: '30px',
  },
};

class AdListItem extends React.Component {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author_name: PropTypes.string.isRequired,
    created_at_datetime: PropTypes.string.isRequired,
    activeUser: PropTypes.string.isRequired,
    descrFixedLength: PropTypes.number.isRequired,
  };

  handleDeleteClick = (event, id) => {
    event.preventDefault();

    // eslint-disable-next-line
    this.props.deleteAd(id);
  };

  sliceText = (text, textLength) => {
    if (!textLength) {
      return text;
    }

    return text && text.length > textLength ? `${text.slice(0, textLength)}\xa0...` : text;
  };

  render() {
    const {
      _id: id,
      title,
      description,
      author_name: author,
      created_at_datetime: date,
      descrFixedLength,
      activeUser,
    } = this.props;

    const datetime = moment(date).format('DD/MM/YYYY');
    const isAdFromMe = activeUser === author;

    return (
      <div className="card-body" style={theme.Card}>
        <h5 className="card-title">
          <Link to={`${id}`}>{title}</Link>
        </h5>
        <p className="d-flex justify-content-beetween no-gutters card-text">
          <small className="text-muted col-sm-6">{author}</small>
          <small className="text-muted text-right col-sm-6">{datetime}</small>
        </p>
        <p className="card-text">{this.sliceText(description, descrFixedLength)}</p>
        {isAdFromMe && (
          <div className="btn-group d-flex">
            <Link className="btn btn-dark" to={`/edit/${id}`}>
              Edit
            </Link>
            <button
              className="btn btn-warning"
              type="button"
              onClick={e => this.handleDeleteClick(e, id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default AdListItem;
