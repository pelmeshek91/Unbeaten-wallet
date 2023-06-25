import styled from 'styled-components';
import rectangle from '../../img/decor-img/Rectangle-desctop@2x.png';
import { createGlobalStyle } from 'styled-components';
import logo from '../../img/logo.png';
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
`;

export const ImgWallet = styled.div`
  background-image: url('./src/img/decor-img/wallet.png');

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GlobalStyle = createGlobalStyle`
  body,html {

  margin: 0;
  padding: 0;
  height: 100%;

    background-color: #636373; 
    background-image: url(${rectangle});
      background-repeat: no-repeat;
  background-size: 115%;
  }
`;

export const Container = styled.div`
  background-image: url('./src/img/decor-img/money.png');

  display: flex;
  flex-direction: row;
  align-items: center;
  height: calc(100vh - 56px);
  justify-content: space-around;
  gap: 100px;
`;

export const Form = styled.form`
  box-shadow: rgba(132, 132, 132, 0.2) 0px 2px 14px inset;
  border-radius: 30px;
  padding: 40px 50px;
  max-width: 392px;
  max-height: 554px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  background-color: rgb(56, 56, 71);
  filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 40px);
`;

export const Label = styled.label`
  color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
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
