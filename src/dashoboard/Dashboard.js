import React, { Component } from "react";
import Filters from "./filters/Filters";
import { PageContainer, PageTitle, MainArea } from "./components/common";
import Map from "./map/Map";
import materialTypes from "./filters/material/materialTypes";

class Dashboard extends Component {
  componentDidMount() {}
  render() {
    const materials = [
      { label: materialTypes.ALL, count: 9 },
      { label: materialTypes.BITUMEN, count: 7 },
      { label: materialTypes.EARTH, count: 2 }
    ];
    return (
      <PageContainer>
        <PageTitle>Boat Ramps</PageTitle>
        <MainArea>
          <Filters materials={materials} />
          <Map features={[]} />
        </MainArea>
      </PageContainer>
    );
  }
}

export default Dashboard;
