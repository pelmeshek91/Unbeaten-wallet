import styled from 'styled-components';

export const GoMainBtn = styled.button`
  display: flex;
  align-items: center;
  font-style: inherit;
  justify-content: space-between;
  width: 114px;
  height: 44px;
  color: #f5f5f5;
  background-color: transparent;
  border: none;
  letter-spacing: 1px;
  /* width: 110px; */
  /* height: 24px; */
  text-align: center;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 42px;
  margin-top: 42px;
  border-radius: 16px;

  &:hover,
  &:focus {
    color: #73ff88;
    border-color: none;
    box-shadow: 1px -1px 24px -2px #73ff88;
  }
`;

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
