import styled from 'styled-components';
import { device } from '../../utilits/mediaQuery';

export const Div = styled.div`
  max-width: 1098px;
  display: flex;
  /* row-gap: 40px; */
  flex-wrap: wrap;
  background-color: rgb(56, 56, 71);
  border-radius: 0px 30px 30px;
  padding: 32px;

  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    width: 40px;
    /* border-top-left-radius: 20px; */
    border-top-right-radius: 20px;
    max-height: 290px;
    text-align: start;

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
    max-width: 1098px;
    flex-wrap: wrap;
    row-gap: 48px;

    border-radius: 0px 30px 30px;
    padding: 32px;
  }

  /* @media screen and (min-width: 768px) {
    max-width: 650px;
    /* row-gap: 40px; */

  /* display: flex;
    flex-wrap: wrap;
    background-color: rgb(56, 56, 71);
    border-radius: 0px 30px 30px;
    padding: 40px;
  } */
  /* 
  @media screen and (min-width: 1280px) {
    max-width: 1098px;
    flex-wrap: wrap;
    row-gap: 48px;

    border-radius: 0px 30px 30px;
    padding: 32px;
  } */
`;

export const ContainerFormDate = styled.div`
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    align-items: flex-start;
  }

  @media ${device.desktop} {
    align-items: center;
  }
  /* 
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }

  @media screen and (min-width: 1280px) {
    align-items: center;
  } */
`;
