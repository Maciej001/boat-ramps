import React from "react";
import styled from "styled-components";
import Option from "./Option";
import { PropTypes } from "prop-types";
import areaTypes from "../../filters/area/areaTypes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf([
        areaTypes.ALL,
        areaTypes.SMALL,
        areaTypes.MEDIUM,
        areaTypes.LARGE
      ]).isRequired,
      label: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired
    })
  ),
  onSelect: PropTypes.func.isRequired
};

const RadioButtons = ({ options, onSelect }) => (
  <Container data-test="radio-buttons-component">
    {options.map(option => (
      <Option
        key={option.label}
        option={option}
        onClick={onSelect}
        data-test="radio-button-option"
      />
    ))}
  </Container>
);

export default RadioButtons;
