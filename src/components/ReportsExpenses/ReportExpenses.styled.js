import styled from 'styled-components';

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
  gap: 2px;

  & > * {
    flex-basis: calc(33.33% - 14px);
  }

  & > *:nth-child(n + 4) {
  }

  @media screen and (min-width: 768px) {
    & > * {
      flex-basis: calc(14.2857% - 5px);
    }

    & > *:nth-child(n + 8) {
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
  background: none;
  background: linear-gradient(
    115.74deg,
    #383847 23.54%,
    rgba(56, 56, 71, 0.29) 107.94%
  );
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  /* max-width: 1034px; */
  padding: 20px 219px;

  @media screen and (min-width: 767px) {
    border-radius: 0;
  }
  @media screen and (min-width: 1024px) {
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
    border-radius: 0;
  }
`;

export const BtnReport = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;
