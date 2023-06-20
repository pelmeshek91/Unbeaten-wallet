import styled from 'styled-components';

export const DivContainer = styled.div``;

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
  width: 290px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  text-align: left;
  color: rgba(199, 204, 220, 0.5);
  border: 2px solid #474759;
  border-radius: 0;
  border-top-left-radius: 16px;
  border-top-right-radius: 0;
  background-color: rgba(56, 56, 71, 1);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  &:focus,
  &:hover {
    outline: none;
    border: 2px solid #474759;
    box-shadow: 0px 6px 7px -2px #41a350;
  }
`;

export const InputNum = styled.input`
  background-color: rgb(56, 56, 71);

  background-size: 20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  border: 2px solid #474759;
  border-radius: 22px;
  border-radius: 0 16px 16px 0;
  width: 116px;
  text-align: center;
  padding: 16px 37px;
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
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 26%;
  right: 30%;
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
  &:focus,
  &:hover {
    box-shadow: 1px 3px 5px rgba(96, 196, 112, 0.35);
    background: #3d944c;
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
  &:hover,
  &:focus {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.15);
    background-color: rgb(70, 70, 88);
  }
`;
