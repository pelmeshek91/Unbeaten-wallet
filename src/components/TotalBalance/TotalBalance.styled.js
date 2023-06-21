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
  cursor: pointer;
  position: absolute;
  margin-left: 160px;
  margin-bottom: 20px;
  top: 93px;
  display: flex;
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
  width: 125px;
  height: 44px;
  place-content: space-around center;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  align-items: center;

  &:hover {
    background-color: rgb(66, 166, 82);
    box-shadow: rgba(96, 196, 112, 0.35) 1px 3px 5px;
    background: rgb(61, 148, 76);
  }

  @media (max-width: 600px) {
    margin-left: 0;
    margin-bottom: 10px;
    top: auto;
    right: 16px;
    padding: 12px 32px;
    font-size: 14px;
    height: 40px;
  }
`;

export const Input = styled.input`
  margin-right: 16px;
  width: 125px;
  height: 16px;
  border-radius: 16px;
  border: 2px solid rgb(71, 71, 89);
  padding: 12px 2px 12px 10px;
  background-color: rgb(56, 56, 71);
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #f6f7fb;
  text-align: center;

  @media (max-width: 600px) {
    margin-right: 0;
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 14px;
  }
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
  font-size: 14px;
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
  display: flex;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledMessage = styled.div`
  position: fixed;
  top: 328%;
  left: 50%;
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

  &::before {
    content: '';
    position: absolute;
    top: -9px;
    left: 23%;
    transform: translateX(-50%);
    width: 0px;
    height: 0px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgb(88, 187, 103);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const RelativeContainer = styled.div`
  height: 20px;
`;
