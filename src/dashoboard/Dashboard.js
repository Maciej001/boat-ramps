import React, { useState } from "react";
import Filters from "./filters/Filters";
import { PageContainer, PageTitle, MainArea } from "./components/common";
import Map from "./map/Map";
import materialTypes from "./filters/material/materialTypes";

const Dashboard = () => {
  const rampMaterials = [
    { label: materialTypes.ALL, count: 9 },
    { label: materialTypes.BITUMEN, count: 7 },
    { label: materialTypes.EARTH, count: 2 }
  ];

  // const allMaterialsCount = rampMaterials.reduce(
  //   (total, material) => total + parseInt(material.count),
  //   0
  // );

  // Check localStore for data
  const localCacheData = JSON.parse(localStorage.getItem("boat.ramps"));

  // Initial data
  if (localCacheData) {
  } else {
  }

  const features = [];
  return (
    <PageContainer>
      <PageTitle>Boat Ramps</PageTitle>

      <MainArea>
        <Filters materials={rampMaterials} />
        <Map features={features} />
      </MainArea>
    </PageContainer>
  );
};

export default Dashboard;
