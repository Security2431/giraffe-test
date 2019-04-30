import React from "react";
import moment from "moment";

const theme = {
  Card: {
    marginBottom: "30px"
  }
};

class AdListItem extends React.Component {
  handleDeleteClick = (event, id) => {
    event.preventDefault();
    // ...
  };

  sliceText = (text, textLength) => {
    if (!textLength) {
      return text;
    }

    return text && text.length > textLength
      ? `${text.slice(0, textLength)} ...`
      : text;
  };

  render() {
    const {
      _id: id,
      title,
      description,
      author_name: author,
      created_at_datetime: date,
      descrLength,
      activeUser
    } = this.props;

    const datetime = moment(date).format("DD/MM/YYYY");
    const isAdFromMe = activeUser === author;

    return (
      <div className="card-body" style={theme.Card}>
        <h5 className="card-title">{title}</h5>
        <p className="d-flex justify-content-beetween no-gutters card-text">
          <small className="text-muted col-sm-6">{author}</small>
          <small className="text-muted text-right col-sm-6">{datetime}</small>
        </p>
        <p className="card-text">{this.sliceText(description, descrLength)}</p>
        {isAdFromMe && (
          <div className="btn-group d-flex">
            <button className="btn btn-dark">Edit</button>
            <button
              className="btn btn-warning"
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
