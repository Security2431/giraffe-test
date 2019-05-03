import React from 'react';
import PropTypes from 'prop-types';
import AdListItem from './AdListItem';
import AdListPagination from './AdListPagination';

const defaults = {
  descrFixedLength: 150,
  pageSize: 5,
};

const theme = {
  Col: {
    flex: '0 0 20%',
    maxWidth: '20%',
  },
};

class AdList extends React.Component {
  static propTypes = {
    activeUser: PropTypes.string.isRequired,
    ads: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        author_name: PropTypes.string.isRequired,
        created_at_datetime: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ),
    deleteAd: PropTypes.func.isRequired,
  };

  static defaultProps = {
    ads: null,
  };

  state = {
    currentPage: null,
  };

  currentPage = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    const { ads, activeUser, deleteAd } = this.props;
    const { currentPage } = this.state;
    const { descrFixedLength, pageSize } = defaults;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const adList = ads
      .filter((item, index) => index >= startIndex && index < endIndex)
      .map((item) => {
        const { _id: id } = item;

        return (
          <div className="col-6 col-sm-4 col-lg-3 col-xl" style={theme.Col} key={id}>
            <AdListItem
              activeUser={activeUser}
              descrFixedLength={descrFixedLength}
              deleteAd={deleteAd}
              {...item}
            />
          </div>
        );
      });

    return (
      <React.Fragment>
        {adList}
        <div className="col-12 d-flex justify-content-center">
          <AdListPagination
            pageSize={pageSize}
            adsCount={ads.length}
            currentPage={this.currentPage}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default AdList;
