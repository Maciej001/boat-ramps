import styled from "styled-components";

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  flex: 1 1 300px;
  min-width: 200px;
  max-width: 400px;
  padding: 20px;
  border: 1px solid grey;
  border-top: 4px solid grey;
  border-radius: 3px;
  @media (max-width: 600px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const Header = styled.h4`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.05em;
  color: #bbb;
  margin-bottom: 30px;
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
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin-bottom: 8px;
`;

export default {
  Container,
  Header,
  Filter,
  FilterLabel
};
