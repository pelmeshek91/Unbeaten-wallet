import styled from 'styled-components';

export const DivContainer = styled.div`
  width: 104px;
  height: 40px;
  display: flex;
  gap: 10px;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 85px;
  flex-direction: row;
  margin-left: 32px;
`;

export const Input = styled.input`
  width: 74px;
  border: none;
  color: #c7ccdc;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  height: 20px;
  max-width: 74px;
  height: 40px;
  overflow: hidden;
  cursor: pointer;
  background-color: rgb(56, 56, 71);

  &:focus {
    outline: none;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 0px 6px #41a350;
  }
`;
