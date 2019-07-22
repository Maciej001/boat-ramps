import React from "react";
import styled from "styled-components";
import { UncheckedIcon, CheckedIcon } from "../icons";
import { PropTypes } from "prop-types";
import areaTypes from "../../filters/area/areaTypes";

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-right: 15px;
  cursor: pointer;

  span {
    display: inline-block;
    line-height: 32px;
    font-size: 16px;
    color: ${props => (props.active ? "blue" : "#666")};
  }
`;

const IconContainer = styled.span`
  display: inline-block;
  margin-right: 12px;
  height: 20px;
  transform: translateY(-2px);
  svg {
    width: 20px;
    fill: ${props => (props.active ? "blue" : "black")};
  }
`;

const propTypes = {
  option: PropTypes.shape({
    type: PropTypes.oneOf([
      areaTypes.ALL,
      areaTypes.SMALL,
      areaTypes.MEDIUM,
      areaTypes.LARGE
    ]).isRequired,
    label: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
  }),
  onClick: PropTypes.func.isRequired
};

const Option = ({ option, onClick }) => (
  <OptionContainer
    onClick={onClick}
    active={option.active}
    data-test="option-container"
  >
    <IconContainer active={option.active}>
      {option.active ? (
        <CheckedIcon data-test="checked-icon" />
      ) : (
        <UncheckedIcon data-test="unchecked-icon" />
      )}
    </IconContainer>
    <span>{option.label}</span>
  </OptionContainer>
);

Option.propTypes = propTypes;

export default Option;
