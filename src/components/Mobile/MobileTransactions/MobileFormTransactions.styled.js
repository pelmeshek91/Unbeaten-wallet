import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: inset 0px 2px 14px rgba(132, 132, 132, 0.2);
  backdrop-filter: blur(70px);
  /* opacity: 0.7; */
  z-index: 9998;
`;
export const ButtonTx = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  text-transform: uppercase;
  padding: 10px;
  background-color: transparent;
  border-color: transparent;
  margin: 16px 0 0 20px;
  color: #f6f7fb;
`;

export const DivContainer = styled.div`
  height: 40px;
  margin-right: 10px;
  display: flex;
  gap: 10px;
  -webkit-box-align: center;
  align-items: center;
  /* margin-top: 35px; */
  flex-direction: row;
  /* margin-left: 32px; */
`;

export const InputDate = styled.input`
  /* width: 74px; */

  margin-right: 28px;
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

export const MobileFormTransactions = styled.form``;
