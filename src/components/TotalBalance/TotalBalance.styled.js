import styled from 'styled-components';

export const BalanceContainer = styled.div`
  /* padding: 19px; */
  display: flex;
  -webkit-box-pack: center;
  -webkit-box-align: baseline;
  align-items: center;
  justify-content: center;
  margin: 0px auto;
  /* padding-left: 200px; */
`;

export const Button = styled.button`
  //
  cursor: pointer;
  /* position: fixed;
  top: 88px;
  left: 654px; */

  display: flex;
  /* margin-right: 16px; */
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
  margin-left: 32px;
  &:hover {
    background-color: rgb(66, 166, 82);
    box-shadow: rgba(96, 196, 112, 0.35) 1px 3px 5px;
    background: rgb(61, 148, 76);
  }

  @media (max-width: 600px) {
    /* margin-left: 0;
    margin-bottom: 10px; */
    top: auto;
    right: 16px;
    padding: 12px 32px;
    font-size: 14px;
    height: 40px;
  }
`;

export const Input = styled.input`
  //balance
  /* position: fixed;
  top: 89px;
  left: 497px; */

  /* margin-right: 16px; */
  width: 125px;
  height: 16px;
  border-radius: 16px;
  border: 2px solid rgb(71, 71, 89);
  padding: 12px 2px 12px 10px;
  background-color: rgb(56, 56, 71);
  font-weight: 700;
  font-size: 13px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: rgb(246, 247, 251);
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
  /* position: fixed;
  top: 76px;
  left: 497px; */
  width: 125px;
  height: 16px;
  border-radius: 16px;
  border: 2px solid rgb(71, 71, 89);
  padding: 12px 2px 12px 10px;
  background-color: rgb(56, 56, 71);
  font-weight: 700;
  font-size: 13px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: rgb(246, 247, 251);
  text-align: center;
  margin: 0;
  margin-right: 141px;
`;

export const BalanceLabel = styled.p`
  /* position: fixed;
  top: 70px;
  left: 387px; */
  font-size: 24px;
  font-weight: bold;
  color: #c7ccdc;
  margin: 0;
  margin-right: 20px;
`;

export const InputContainer = styled.div`
  /* margin-top: 16px; */
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

  /* @media (max-width: 1024px) {
    display: none;
  } */
`;

export const RelativeContainer = styled.div`
  height: 13px;
  width: 125px;
`;
