import React from "react";
import AdListItem from "./AdListItem";
import AdListPagination from "./AdListPagination";

const defaults = {
  descrLength: 150,
  pageSize: 5
};

const theme = {
  Col: {
    flex: "0 0 20%",
    maxWidth: "20%"
  }
};

class AdList extends React.Component {
  state = {
    currentPage: null
  };

  currentPage = page => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { ads, activeUser } = this.props;
    const { currentPage } = this.state;
    const { pageSize, descrLength } = defaults;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const adList = ads
      .filter((item, index) => {
        return index >= startIndex && index < endIndex;
      })
      .map(item => {
        const { _id: id } = item;

        return (
          <div
            className="col-6 col-sm-4 col-lg-3 col-xl"
            style={theme.Col}
            key={id}
          >
            <AdListItem
              descrLength={descrLength}
              activeUser={activeUser}
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
