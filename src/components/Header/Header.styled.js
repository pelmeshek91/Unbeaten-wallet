import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #1f1f27;
`;

export const HeaderMain = styled.header`
  display: flex;
  align-items: center;
  margin-left: 40px;
  justify-content: space-between;
  width: 1280px;
  height: 56px;
  margin: 0 20px;
  @media (min-width: 767px) {
    margin: 0 40px;
  }
`;

export const Image = styled.img`
  width: 136px;
  height: 32px;

  @media (min-width: 767px) {
    width: 170px;
    height: 40px;
  }
`;
