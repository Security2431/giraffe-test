/* eslint no-underscore-dangle: 0 */
/* eslint jsx-a11y/label-has-for: 0 */
/* eslint jsx-a11y/label-has-associated-control: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cuid from 'cuid';

class EditForm extends React.Component {
  static propTypes = {
    activeUser: PropTypes.string.isRequired,
    ad: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      author_name: PropTypes.string.isRequired,
      created_at_datetime: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
    onSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    ad: null,
  };

  state = {
    title: {
      value: '',
    },
    description: {
      value: '',
    },
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.ad) {
      this.setState({
        title: {
          value: '',
        },
        description: {
          value: '',
        },
      });
    }

    // eslint-disable-next-line
    if (nextProps.ad && nextProps.ad !== this.props.ad) {
      this.setState({
        title: {
          value: nextProps.ad.title,
        },
        description: {
          value: nextProps.ad.description,
        },
      });
    }
  }

  handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { title, description } = this.state;
    const { activeUser, onSubmit, ad } = this.props;

    // eslint-disable-next-line
    const id = !!ad ? ad._id : cuid();

    const params = {
      ...ad,
      _id: id,
      author_name: activeUser,
      created_at_datetime: moment().format(),
      title: title.value,
      description: description.value,
    };

    onSubmit(params);
  };

  render() {
    const { title, description } = this.state;
    const { ad } = this.props;

    return (
      <div className="col-md-6 col-lg-5">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-2" htmlFor="title">
              Title
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                id="title"
                type="text"
                name="title"
                autoComplete="title"
                value={title.value}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2" htmlFor="description">
              Description
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="8"
                value={description.value}
                autoComplete="description"
                onChange={this.handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              <button className="btn btn-primary btn-block" type="submit">
                {ad ? 'Edit' : 'Create'}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditForm;
