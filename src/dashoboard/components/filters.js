import styled from "styled-components";

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  flex: 1 1 300px;
  min-width: 300px;
  max-width: 400px;
  border: 1px solid ${props => props.theme.grey200};
  border-radius: 5px;
  box-shadow: 0 5px 10px -2px rgba(0,0,0,0.07);
  overflow: hidden;
  @media (max-width: 600px) {
    flex: 1 1 100%;
    width:
    max-width: 100%;
  }
`;

const Header = styled.header`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${props => props.theme.primary100};
  background: ${props => props.theme.primary400};
  padding: 15px 0;
  margin-bottom: 10px;
`;

const Body = styled.section`
  padding: 20px;
`;

const Filter = styled.fieldset`
  margin-bottom: 30px;
  border: 0;
  padding: 0;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const FilterLabel = styled.legend`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.grey800};
  padding-bottom: 6px;
  border-bottom: 1px solid ${props => props.theme.grey200};
  margin-bottom: 8px;
`;

export default {
  Container,
  Header,
  Body,
  Filter,
  FilterLabel
};
