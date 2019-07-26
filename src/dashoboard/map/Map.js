import React, { Component } from "react";
import ReactMapboxGl, { Marker, ZoomControl } from "react-mapbox-gl";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMaterialColor } from "../components/utils";

const MapContainer = styled.div`
  width: 100%;
  min-width: 200px;
  height: 576px;
  margin-left: 40px;
  border: 1px solid ${props => props.theme.grey200};
  border-radius: 5px;
  overflow: hidden;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const Mark = styled.div`
  background-color: ${props => props.theme[`${props.material}500`]};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 4px solid ${props => props.theme[`${props.material}300`]};
`;

const propTypes = {
  data: PropTypes.array
};

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibWFjaWVqcGwiLCJhIjoiY2p5aWs0MGRwMDB2MzNtbWswbjV1aTVtcCJ9.Qlmiq3MuneJE6WHdifHZnw"
});

class BoatMap extends Component {
  mapRef = React.createRef();

  render() {
    const { box, data } = this.props;

    if (!data) return null;

    return (
      <MapContainer>
        <Map
          ref={this.mapRef}
          style="mapbox://styles/mapbox/streets-v11"
          containerStyle={{
            height: "100%",
            width: "100%"
          }}
          fitBounds={box}
          onZoom={props => {
            console.log(`this.mapRef`, this.mapRef);
            console.log("zoom end with props", props);
          }}
        >
          {data.data.map(feature => (
            <Marker
              key={feature.id}
              coordinates={feature.geometry.coordinates[0][0][0]}
            >
              <Mark material={getMaterialColor(feature.properties.material)} />
            </Marker>
          ))}

          <ZoomControl />
        </Map>
      </MapContainer>
    );
  }
}

Map.propTypes = propTypes;

const mapStateToProps = state => ({
  area: state.area,
  material: state.material,
  box: state.box,
  data: state.cache.find(
    dataset =>
      JSON.stringify(dataset.filters) ===
      JSON.stringify({
        area: state.area,
        material: state.material,
        box: state.box
      })
  )
});

export default connect(mapStateToProps)(BoatMap);
