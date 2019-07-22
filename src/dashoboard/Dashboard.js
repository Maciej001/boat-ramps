import React from "react";
import Filters from "./filters/Filters";
import { PageContainer, PageTitle, MainArea } from "./components/common";
import materials from "./filters/materialTypes";
import areaTypes from "./filters/areaTypes";
import Map from "./map/Map";

const Dashboard = () => {
  const rampMaterials = [
    { label: materials.BITUMEN, count: 7, active: true },
    { label: materials.EARTH, count: 2, active: false }
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
