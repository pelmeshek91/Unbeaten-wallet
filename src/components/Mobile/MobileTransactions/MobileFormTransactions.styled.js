import styled from 'styled-components';
import { NumericFormat } from 'react-number-format';

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
export const MainContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 32px;
  -webkit-box-align: center;
  align-items: flex-start;
`;

export const Form = styled.form`
  /* display: flex; */
`;

export const Input = styled.input`
  width: 280px;
  padding: 10px 0px 10px 20px;
  outline: none;
  box-sizing: border-box;
  text-align: left;
  color: rgba(199, 204, 220, 0.5);
  border: 2px solid #474759;
  border-radius: 0;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: rgb(56, 56, 71);
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
`;

export const InputNum = styled(NumericFormat)`
  background-color: rgb(56, 56, 71);
  padding: 12px 18px 12px 2px;
  background-size: 20px;
  margin-top: 32px;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  border: 2px solid #474759;

  border-radius: 22px;
  width: 116px;
  text-align: center;
  /* padding: 16px 37px; */
  color: #c7ccdc;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0px 6px 7px -2px #41a350;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  /* margin-top: 55px; */
  top: 50%;
  left: 50%;
  gap: 16px;
  position: static;
  transform: translateX(0);
  padding-left: 32px;
`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
`;

export const IconContainer = styled.div`
  position: absolute;
  bottom: 8%;
  left: 30%;
`;

export const InputBtn = styled.button`
  border: 2px solid transparent;
  padding: 16px 48px;
  border-radius: 16px;
  background: #42a652;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #f6f7fb;
  text-align: center;
  cursor: pointer;

  &:focus,
  &:hover {
    box-shadow: 1px 3px 5px rgba(96, 196, 112, 0.35);
    background: #3d944c;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: inherit;
  }
`;

export const ClearBtn = styled.button`
  border-radius: 16px;
  border: 2px solid #474759;
  padding: 16px 48px;
  background-color: rgba(56, 56, 71, 1);
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #f6f7fb;
  text-align: center;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.15);
    background-color: rgb(70, 70, 88);
  }
`;

// DATEEEEEEEE

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
