import styled from 'styled-components';

export const FormAmount = styled.div`
  max-width: 230px;
  margin: 0 auto;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;

  border: 2px solid rgb(71, 71, 89);
  border-radius: 30px;
  padding-top: 20px;
  padding-bottom: 25px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 32px;
  & > * {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 767px) {
    max-width: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(
      115.74deg,
      #383847 23.54%,
      rgba(56, 56, 71, 0.29) 107.94%
    );
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    padding: 15px;
    margin-bottom: 32px;
    & > * {
      display: flex;
      flex-direction: row;
    }
  }
`;

export const TextAmound = styled.span`
  padding-left: 8px;
  color: white;
  margin-right: 15px;
  font-weight: 700;
  line-height: 1.14;
  @media screen and (min-width: 767) {
  }
`;

export const TotalAmoundPlus = styled.span`
  color: #60c470;
  margin-right: 15px;
  font-weight: 700;
  line-height: 1.14;
`;

export const TotalAmoundMin = styled.span`
  color: #fe4566;
  margin-right: 15px;
  font-weight: 700;
  line-height: 1.14;
`;
