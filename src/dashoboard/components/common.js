import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;

export const MainArea = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
`;
