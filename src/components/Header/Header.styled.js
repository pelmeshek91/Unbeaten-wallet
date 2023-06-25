import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #1f1f27;
  justify-content: center;
`;

export const HeaderMain = styled.header`
  background-color: #1f1f27;
  display: flex;
  align-items: center;

  justify-content: space-between;
  min-width: 320px;
  width: 100%;
  height: 56px;
  @media (min-width: 768px) {
    min-width: 768px;
  }
  @media (min-width: 1200px) {
    min-width: 1200px;
  }
`;

export const Image = styled.img`
  width: 136px;
  height: 32px;
  margin-left: 40px;
  @media (min-width: 767px) {
    width: 170px;
    height: 40px;
  }
`;
