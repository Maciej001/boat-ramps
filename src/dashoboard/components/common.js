import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 40px 20px;
`;

export const MainArea = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
