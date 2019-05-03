import React from 'react';
import PropTypes from 'prop-types';

class AdListPagination extends React.Component {
  static propTypes = {
    pageSize: PropTypes.number.isRequired,
    adsCount: PropTypes.number.isRequired,
    currentPage: PropTypes.func.isRequired,
  };

  state = {
    currentPage: 1,
  };

  componentDidMount() {
    // eslint-disable-next-line
    this.props.currentPage(this.state.currentPage);
  }

  componentDidUpdate() {
    const { currentPage } = this.state;
    const { pageSize, adsCount } = this.props;
    const pagesCount = Math.ceil(adsCount / pageSize);

    if (pagesCount && pagesCount < currentPage) {
      this.handleClick(pagesCount);
    }
  }

  handleClick = (index, e) => {
    // eslint-disable-next-line
    e && e.preventDefault && e.preventDefault();

    // eslint-disable-next-line
    this.props.currentPage(index);

    this.setState({
      currentPage: index,
    });
  };

  render() {
    const { currentPage } = this.state;
    const { pageSize, adsCount } = this.props;
    const pagesCount = Math.ceil(adsCount / pageSize);

    return pageSize < adsCount ? (
      <React.Fragment>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={`page-item ${currentPage <= 1 && 'disabled'}`}>
              <button
                className="page-link"
                type="button"
                aria-label="Previous"
                onClick={e => this.handleClick(currentPage - 1, e)}
              >
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </button>
            </li>

            {[...Array(pagesCount)].map((page, i) => (
              <li
                className={`page-item ${i + 1 === currentPage && 'active'}`}
                // eslint-disable-next-line
                key={i}
              >
                <button
                  className="page-link"
                  type="button"
                  onClick={e => this.handleClick(i + 1, e)}
                >
                  {i + 1}
                </button>
              </li>
            ))}

            <li className={`page-item ${currentPage >= pagesCount && 'disabled'}`}>
              <button
                className="page-link"
                type="button"
                aria-label="Next"
                onClick={e => this.handleClick(currentPage + 1, e)}
              >
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </button>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    ) : null;
  }
}

export default AdListPagination;
