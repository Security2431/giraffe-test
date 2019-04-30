import React from "react";

class AdListPagination extends React.Component {
  state = {
    currentPage: 1
  };

  componentDidMount() {
    this.props.currentPage(this.state.currentPage);
  }

  componentDidUpdate(prevProps) {
    const { pageSize, adsCount } = this.props;
    const pagesCount = Math.ceil(adsCount / pageSize);

    if (pagesCount && pagesCount < this.state.currentPage) {
      this.handleClick(pagesCount);
    }
  }

  handleClick = (index, e) => {
    e && e.preventDefault && e.preventDefault();

    this.props.currentPage(index);

    this.setState({
      currentPage: index
    });
  };

  render() {
    const { currentPage } = this.state;
    const { pageSize, adsCount } = this.props;
    const pagesCount = Math.ceil(adsCount / pageSize);

    console.log(currentPage <= 1);

    return pageSize < adsCount ? (
      <React.Fragment>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={`page-item ${currentPage <= 1 && "disabled"}`}>
              <a
                className="page-link"
                href="#"
                aria-label="Previous"
                onClick={e => this.handleClick(currentPage - 1, e)}
              >
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>

            {[...Array(pagesCount)].map((page, i) => (
              <li
                className={`page-item ${i + 1 === currentPage && "active"}`}
                key={i}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={e => this.handleClick(i + 1, e)}
                >
                  {i + 1}
                </a>
              </li>
            ))}

            <li
              className={`page-item ${currentPage >= pagesCount && "disabled"}`}
            >
              <a
                className="page-link"
                href="#"
                aria-label="Next"
                onClick={e => this.handleClick(currentPage + 1, e)}
              >
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    ) : null;
  }
}

export default AdListPagination;
