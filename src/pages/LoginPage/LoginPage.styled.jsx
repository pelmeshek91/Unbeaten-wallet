import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('./src/img/decor-img/money.png');

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  box-shadow: rgba(132, 132, 132, 0.2) 0px 2px 14px inset;
  border-radius: 30px;
  padding: 40px 30px;
  width: 400px;
  height: 400px;
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
  padding: 20px;
  width: 150px;
  background: rgb(246, 247, 251);
  border-radius: 16px;
  border: none;
  box-shadow: rgba(21, 23, 21, 0.655) 1px 3px 5px;
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
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  margin: 10px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
  width: 200px;
`;
