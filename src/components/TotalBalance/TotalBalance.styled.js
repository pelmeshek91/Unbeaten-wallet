import { style } from '@mui/system';
import styled from 'styled-components';
import { device } from 'utilits/mediaQuery';

export const BalanceContainer = styled.div`
  //3elms
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-box-pack: center;
  -webkit-box-align: baseline;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 767px) {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  @media ${device.desktop} {
    margin: 0px auto;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 40px;
  @media screen and (min-width: 767px) {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  border-radius: 0 16px 16px 0;

  border: 2px solid rgb(71, 71, 89);
  padding: 10px;

  background-color: transparent;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: rgb(246, 247, 251);
  text-align: center;
  top: auto;
  width: 140px;
  height: 43px;

  place-content: space-around center;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 30px;
  &:hover {
    background-color: rgb(66, 166, 82);
    box-shadow: rgba(96, 196, 112, 0.35) 1px 3px 5px;
    background: rgb(61, 148, 76);
  }

  @media screen and (min-width: 767px) {
    padding: 16px 48px;
    font-size: 12px;
    border-radius: 16px;
    margin-left: 35px;
    width: 125px;
    height: 44px;
    background: rgba(128, 132, 143, 1);
  }
`;

export const ButtonDisabled = styled.button`
  display: flex;
  border-radius: 0 16px 16px 0;

  border: 2px solid rgb(71, 71, 89);
  padding: 10px;

  background-color: transparent;
  font-weight: 700;
  font-size: 11px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  text-align: center;
  top: auto;
  width: 140px;
  height: 43px;

  place-content: space-around center;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 30px;
  margin: 0;
  color: rgb(246, 247, 251);
  border: 2px solid rgba(128, 132, 143, 1);

  @media screen and (min-width: 767px) {
    padding: 16px 48px;
    font-size: 12px;
    border-radius: 16px;
    margin-left: 16px;
    width: 125px;
    height: 44px;
    border: 2px solid rgba(128, 132, 143, 1);
  }
`;

export const Input = styled.input`
  width: 125px;
  height: 17px;
  padding: 12px 8px 11px 4px;
  background-color: transparent;
  font-weight: 700;
  font-size: 13px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: rgb(246, 247, 251);
  text-align: center;
  margin: 0px;
  border-radius: 16px 0 0 16px;
  margin-right: 0;
  border: 2px solid rgb(71, 71, 89);

  @media screen and (min-width: 767px) {
    width: 125px;
    font-size: 13px;
    border-radius: 16px;
    /* border: 2px solid rgba(128, 132, 143, 1); */
  }
`;

export const BalanceValue = styled.p`
  width: 125px;
  height: 17px;
  border-radius: 16px;
  border: 2px solid rgb(71, 71, 89);
  padding: 12px 8px 11px 4px;

  background-color: transparent;
  font-weight: 700;
  font-size: 13px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: rgb(246, 247, 251);
  text-align: center;
  margin: 0;
  margin-right: 0px;
  border-radius: 16px 0 0 16px;
  margin-right: 0;
  border: 2px solid rgba(128, 132, 143, 1);

  @media screen and (min-width: 767px) {
    padding: 12px 2px 12px 10px;
    border-radius: 16px;
    border: 2px solid rgba(128, 132, 143, 1);
  }
`;

export const BalanceLabel = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #c7ccdc;

  margin-bottom: 10px;

  @media screen and (min-width: 767px) {
    margin-right: 21px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1024px) {
    font-size: 12px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledMessage = styled.div`
  position: fixed;
  top: 547%;
  left: 119%;

  transform: translate(-50%, -50%);
  display: flex;
  margin-top: 10px;
  position: relative;
  width: 268px;
  height: 125px;
  background: linear-gradient(
      118.06deg,
      rgb(88, 187, 103) 3.05%,
      rgb(54, 131, 66) 125.62%
    )
    center center / cover no-repeat;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 16px;
  border-radius: 30px;
  padding-top: 10px;
  padding-left: 16px;
  padding-right: 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.4;
  color: rgb(255, 255, 255);
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
  border: 2px solid rgba(128, 132, 143, 1);

  &::before {
    content: '';
    position: absolute;
    top: -9px;
    left: 30%;
    transform: translateX(-50%);
    width: 0px;
    height: 0px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgb(88, 187, 103);
  }
`;

export const RelativeContainer = styled.div`
  height: 13px;
  width: 125px;
`;
