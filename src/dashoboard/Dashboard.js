import React, { Component } from "react";
import { connect } from "react-redux";
import Filters from "./filters/Filters";
import { PageContainer, MainArea } from "./components/common";
import Map from "./map/Map";
import { initCache } from "./cache/redux/actionCreators";

class Dashboard extends Component {
  componentDidMount() {
    this.props.initCache();
  }

  render() {
    return (
      <PageContainer>
        <MainArea>
          <Filters />
          <Map />
        </MainArea>
      </PageContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initCache: () => dispatch(initCache())
});

export default connect(
  null,
  mapDispatchToProps
)(Dashboard);
