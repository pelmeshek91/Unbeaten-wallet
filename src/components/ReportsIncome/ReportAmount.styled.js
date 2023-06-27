import styled from 'styled-components';

export const FormAmount = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: transparent;

  background: linear-gradient(
    115.74deg,
    #383847 23.54%,
    rgba(56, 56, 71, 0.29) 107.94%
  );
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  padding: 15px;
  margin-bottom: 32px;
  background-color: transparent;

  @media screen and (min-width: 767px) {
    border-radius: 30px;
    background: linear-gradient(
      115.74deg,
      #383847 23.54%,
      rgba(56, 56, 71, 0.29) 107.94%
    );
  }
  @media screen and (min-width: 1024px) {
    border-radius: 30px;
    background: linear-gradient(
      115.74deg,
      #383847 23.54%,
      rgba(56, 56, 71, 0.29) 107.94%
    );
  }
`;

export const TextAmound = styled.span`
  color: white;
  margin-right: 15px;
  font-weight: 700;
  line-height: 1.14;
  display: flex;
  @media screen and (min-width: 767px) {
    display: flex;
  }
`;

export const TotalAmoundPlus = styled.span`
  color: #60c470;
  margin-right: 15px;
  font-weight: 700;
  line-height: 1.14;
  @media screen and (min-width: 767px) {
    display: flex;
  }
`;

export const TotalAmoundMin = styled.span`
  color: #fe4566;
  margin-right: 15px;
  font-weight: 700;
  line-height: 1.14;
`;

export const Container = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
  }
`;
