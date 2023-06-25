import styled from 'styled-components';
import rectangle from '../../img/decor-img/Rectangle-desctop@2x.png';
import { createGlobalStyle } from 'styled-components';
import logo from '../../img/logo.png';
import wallet from '../../img/decor-img/wallet.png';
import money from '../../img/decor-img/money.png';
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: 40px center;
  background-size: 170px 40px;
  min-width: 1280px;
  padding-top: 56px;
  background-color: #1f1f27;
  color: white;
  text-justify: center;
  @media screen and (min-width: 768px) {
    min-width: 768px;
  }
  @media screen and (min-width: 320px) {
    min-width: 320px;
  }
`;

export const ImgWallet = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
  min-height: 0;
  &::after {
    content: '';
    position: absolute;
    top: 8%;
    left: -30%;
    right: 60%;
    bottom: 70%;
    box-shadow: inset 10px 0 200px 10px rgba(176, 232, 185, 0.3);
    filter: blur(30px);
    border-radius: 50%;
  }

  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    min-width: 675px;
    min-height: 544px;
    background-image: url(${money});
  }

  @media screen and (min-width: 1200px) {
    position: relative;
    bottom: 20px;
    left: 0;
    min-width: 675px;
    min-height: 544px;
    background-image: url(${wallet});

    &::after {
      content: '';
      position: absolute;
      top: 40px;
      left: 50px;
      right: 50px;
      bottom: 40px;
      box-shadow: inset 10px 0 200px 10px rgba(176, 232, 185, 0.3);
      filter: blur(30px);
      border-radius: 50%;
      z-index: 1;
    }
  }
  @media screen and (min-width: 768px) {
    &::after {
      content: '';
      position: absolute;
      top: 40px;
      left: 50px;
      right: 50px;
      bottom: 40px;
      box-shadow: inset 10px 0 200px 10px rgba(176, 232, 185, 0.3);
      filter: blur(30px);
      border-radius: 50%;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-color: #383847;
    background-repeat: no-repeat;
    /* background-size: 130%; */
  }

  @media screen and (min-width: 768px) {
    body, html {
      background-image: url(${rectangle});
      background-size: 180% ;
    background-position: right 50% top ;
    }
  }
   @media screen and (min-width: 1200px) {
    body, html {
      background-image: url(${rectangle});
      background-size: 115% ;
    
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: calc(100vh - 56px);
  justify-content: space-around;
  gap: 100px;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    /* justify-content: center;
    align-items: center; */
  }
`;

export const Form = styled.form`
  box-shadow: rgba(132, 132, 132, 0.2) 0px 2px 14px inset;
  border-radius: 30px;
  padding: 40px 30px;
  max-width: 280px;
  height: 300px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  background-color: rgb(56, 56, 71);
  filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 40px);
  @media screen and (min-width: 768px) {
    padding: 40px 50px;
    max-width: 392px;
    height: 300px;
  }
`;

export const Label = styled.label`
  color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const Text = styled.label`
  margin-bottom: 10px;
  font-size: 12px;
`;

export const Input = styled.input`
  padding-left: 15px;

  width: 288px;
  height: 48px;
  background: rgb(246, 247, 251);
  border-radius: 16px;
  border: none;
  box-shadow: rgba(21, 23, 21, 0.655) 1px 3px 5px;
`;

export const ErrorMessage = styled.div`
  color: #fe4566;
  margin-top: 5px;
  margin-left: 9px;
  font-size: 12px;
  line-height: 12px;
  padding-bottom: 20px;

  letter-spacing: 0.04em;
`;
export const ButtonContainer = styled.div`
  display: flex;
`;
export const Button = styled.button`
  background: rgb(66, 166, 82);
  box-shadow: rgba(96, 196, 112, 0.35) 1px 3px 5px;
  border-radius: 16px;
  border: none;
  width: 136px;
  height: 44px;
  margin-top: -15px;
  cursor: pointer;

  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  margin: 10px;
  transition: ease-out 500ms;

  animation: buttonGlow 1.5s infinite alternate;

  @keyframes buttonGlow {
    0% {
      box-shadow: 0 0 5px rgba(18, 230, 53, 0.8);
    }
    100% {
      text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
        0 0 0.45em rgba(18, 230, 53, 0.8);
      box-shadow: inset 0 0 0.5em 0 rgba(18, 230, 53, 0.8),
        0 0 0.5em 0 rgba(18, 230, 53, 0.8);
    }
  }
  animation: buttonScale 2s infinite ease-in-out;

  @keyframes buttonScale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  &:hover {
    background-color: #4bae60;
    transition: ease-in 500ms;
    transform: scale(1.1);
  }
`;
export const ButtonWhite = styled.button`
  background-color: #f5f6fb;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  border: none;
  width: 136px;
  height: 44px;

  cursor: pointer;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
  margin: 10px;
`;
export const ErrorMessageContainer = styled.div`
  overflow: hidden;
  height: 20px;
  transition: height 0.3s ease;
`;
