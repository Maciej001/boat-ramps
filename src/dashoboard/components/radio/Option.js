import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { UncheckedIcon, CheckedIcon } from "../icons";
import { PropTypes } from "prop-types";
import areaTypes from "../../filters/area/areaTypes";
import { setArea } from "../../filters/area/redux/actionCreators";

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
    fill: ${props => (props.active ? "blue" : "#666")};
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
    label: PropTypes.string.isRequired
  }),
  selectedArea: PropTypes.oneOf([
    areaTypes.ALL,
    areaTypes.SMALL,
    areaTypes.MEDIUM,
    areaTypes.LARGE
  ]).isRequired,
  onSelect: PropTypes.func.isRequired
};

const Option = ({ option, selectedArea, onSelect }) => {
  const active = option.type === selectedArea;

  return (
    <OptionContainer
      active={active}
      onClick={() => onSelect(option.type)}
      data-test="option-container"
    >
      <IconContainer active={active}>
        {active ? (
          <CheckedIcon data-test="checked-icon" />
        ) : (
          <UncheckedIcon data-test="unchecked-icon" />
        )}
      </IconContainer>
      <span>{option.label}</span>
    </OptionContainer>
  );
};

Option.propTypes = propTypes;

const mapStateToProps = state => ({
  selectedArea: state.area
});

const mapDispatchToProps = dispatch => ({
  onSelect: type => dispatch(setArea(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Option);
