import styled from 'styled-components';
// import { NumericFormat } from 'react-number-format';
import { device } from '../../utilits/mediaQuery';

export const MainContainer = styled.div`
  background-color: #383847;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 32px;
  -webkit-box-align: center;
  align-items: flex-start;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-top: 0;
    padding-bottom: 124px;
    position: relative;
    /* width: 616px; */
  }
  @media ${device.desktop} {
    display: flex;
    width: auto;
    padding-bottom: 0px;
    -webkit-box-pack: center;
    justify-content: center;
    /* margin-top: 32px; */
    -webkit-box-align: center;
    align-items: flex-start;
  }
`;

export const Form = styled.form`
  display: flex;
  @media screen and (max-width: 767px) {
    padding: 32px 0 32px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  margin: 0 auto;
  align-items: center;
  justify-content: center;
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

  @media ${device.tablet} {
    width: 194px;
    padding: 13px;
    box-sizing: border-box;
    text-align: left;
    color: rgba(199, 204, 220, 0.5);
    border: 2px solid #474759;
    border-radius: 0;
    border-top-left-radius: 16px;
    border-top-right-radius: 0;
    background-color: rgb(56, 56, 71);
    font-size: 12px;
    line-height: 1.16;
    letter-spacing: 0.02em;
    &:focus,
    &:hover {
      outline: none;
      border: 2px solid #474759;
      box-shadow: 0px 6px 7px -2px #41a350;
      background-color: rgb(56, 56, 71);
    }
  }

  @media ${device.desktop} {
    width: 288px;
    padding: 16px;
    &:focus,
    &:hover {
      outline: none;
      border: 2px solid #474759;
      box-shadow: 0px 6px 7px -2px #41a350;
      background-color: rgb(56, 56, 71);
    }
  }
`;

export const InputNum = styled.input`
  margin: 0 auto;
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
  padding: 12px 20px;
  text-align: start;
  color: #c7ccdc;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  background-color: rgb(56, 56, 71);

  @media ${device.tablet} {
    margin-top: 0;
    display: flex;
    justify-content: center;
    width: 40px;
    border-radius: 0;
    /* border-top-left-radius: 20px; */
    border-top-right-radius: 20px;
    /* max-height: 290px; */
    text-align: start;
    padding: 13px 40px;
    overflow: hidden;
    /* margin-top: 40px; */
    /* margin-left: 77px; */

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
  }

  @media ${device.desktop} {
    background-color: rgb(56, 56, 71);
    background-size: 20px;
    font-size: 12px;
    line-height: 1.16;
    letter-spacing: 0.02em;
    border: 2px solid #474759;

    border-radius: 0 16px 16px 0;

    text-align: center;
    padding: 16px 37px;
    color: #c7ccdc;
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

  margin-top: 80px;

  @media ${device.tablet} {
    margin-top: 0;
    display: flex;
    gap: 16px;
    left: 30%;
    position: absolute;
    top: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  @media ${device.desktop} {
    /* margin-top: 55px; */
    top: 50%;
    left: 50%;
    position: static;
    transform: translateX(0);
    padding-left: 32px;
  }
`;

export const Container = styled.div`
  position: relative;
  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }
`;

export const IconContainer = styled.div`
  position: absolute;

  color: white;
  font-size: 30px;
  @media screen and (max-width: 767px) {
    bottom: 5%;
    left: 70%;
  }
  @media ${device.tablet} {
    top: 24%;
    right: 12%;
  }

  @media ${device.desktop} {
    right: 10%;
  }
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
  /* @media screen and (max-width: 767px) {
    margin-top: 80px;
  } */
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
