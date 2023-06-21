import styled from 'styled-components';

export const BalanceContainer = styled.div`
  background-image: url('https://abrakadabra.fun/uploads/posts/2022-03/1647520011_1-abrakadabra-fun-p-foni-dlya-saita-1.jpg');
  display: flex;
  padding: 16px;
  margin-bottom: 16px;
  justify-content: center;
  align-items: baseline;
`;

export const Button = styled.button`
  margin-right: 16px;
  border-radius: 16px;
  border: 2px solid rgb(71, 71, 89);
  padding: 16px 48px;
  background-color: rgb(56, 56, 71);
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: rgb(246, 247, 251);
  text-align: center;

  &:hover {
    background-color: rgb(66, 166, 82);
  }
`;

export const Input = styled.input`
  margin-right: 16px;
  width: 125px;
  border-radius: 16px;
  border: 2px solid rgb(71, 71, 89);
  padding: 16px;
  background-color: rgb(56, 56, 71);
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #f6f7fb;
  text-align: center;
`;

export const BalanceValue = styled.p`
  width: 125px;
  border-radius: 16px;
  border: 2px solid rgb(71, 71, 89);
  padding: 16px;
  background-color: rgb(56, 56, 71);
  font-weight: 700;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #f6f7fb;
  text-align: center;
  font-family: 'Roboto';
  font-size: 12px;
  margin-right: 16px;
`;

export const BalanceLabel = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
  color: #c7ccdc;
`;

export const InputContainer = styled.div`
  margin-top: 16px;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;
