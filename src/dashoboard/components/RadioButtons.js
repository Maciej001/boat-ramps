import React from "react";
import styled from "styled-components";
import { UncheckedIcon, CheckedIcon } from "./icons";
import { black } from "ansi-colors";

const RadioButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

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
    color: ${props => (props.active ? "blue" : "black")};
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

const Option = ({ option, onClick }) => (
  <OptionContainer onClick={onClick} active={option.active}>
    <IconContainer active={option.active}>
      {option.active ? <CheckedIcon /> : <UncheckedIcon />}
    </IconContainer>
    <span>{option.label}</span>
  </OptionContainer>
);

/**
 *
 * @param {array} options: [{ type, label, active }, {type, label, active}]
 * @param onSelect {func}
 */
const RadioButtons = ({ options, onSelect }) => (
  <RadioButtonsContainer>
    {options.map(option => (
      <Option key={option.label} option={option} onClick={onSelect} />
    ))}
  </RadioButtonsContainer>
);

export default RadioButtons;
