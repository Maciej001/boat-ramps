import React from "react";
import Filters from "./filters/Filters";
import { PageContainer, PageTitle, MainArea } from "./components/common";
import areaTypes from "./filters/area/areaTypes";
import Map from "./map/Map";
import materialTypes from "./filters/material/materialTypes";

const Dashboard = () => {
  const rampMaterials = [
    { label: materialTypes.BITUMEN, count: 7, active: true },
    { label: materialTypes.EARTH, count: 2, active: false }
  ];
  const features = [];
  return (
    <PageContainer>
      <PageTitle>Boat Ramps</PageTitle>

      <MainArea>
        <Filters materials={rampMaterials} areaType={areaTypes.ALL} />
        <Map className="Map" features={features} />
      </MainArea>
    </PageContainer>
  );
};

export default Dashboard;
