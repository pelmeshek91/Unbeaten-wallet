import styled from 'styled-components';
import { device } from 'utilits/mediaQuery';

export const ImageItem = styled.button`
  background: rgba(86, 86, 107, 0.2);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
  border-radius: 32px;
  margin: auto;
  display: flex;

  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s;

  &:hover,
  &:focus {
    border-color: green;
  }
`;

export const ListImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  & > * {
    flex-basis: calc(33.33% - 14px);
  }

  & > *:nth-child(n + 4) {
  }
  @media screen and (min-width: 768px) {
    & > * {
      flex-basis: calc(17.2857% - 15px);
    }

    & > *:nth-child(n + 6) {
    }
  }
`;

export const ImageName = styled.p`
  text-transform: uppercase;

  font-size: 12px;
  line-height: 1.17;
  color: white;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

export const Colum = styled.div`
  display: flex;

  flex-direction: column;
  flex-wrap: wrap;
`;

export const SectionReport = styled.div`
  padding: 0;
  border-radius: 0px;
  padding: 20px 219px;

  @media ${device.tablet} {
    border-radius: 30px;
    margin-bottom: 40px; 
    background: linear-gradient(
      115.74deg,
      #383847 23.54%,
      rgba(56, 56, 71, 0.29) 107.94%
    );
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
  }
  @media ${device.desktop} {
    border-radius: 30px;
    margin-bottom: 40px;
   
  }
`;

export const BtnSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 767px) {
    border-radius: 30px;
  }
`;

export const BtnReport = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;
