import styled from 'styled-components';

export const BackContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  cursor: pointer;
`;

export const BtnName = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.04em;
  text-align: center;
  text-decoration: none;
  color: #c7ccdc;
`;

export const BackBtn = styled.button`
  background: none;
  border: none;
  /* color: white; */
  color: black;
  cursor: pointer;
`;

export const ReportContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 32px;
  max-width: 1034px;
  /* padding-top: 40px; */
`;
