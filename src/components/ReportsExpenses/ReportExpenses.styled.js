import styled from "styled-components"

export const ImageItem = styled.div`
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
  }`;

export const ListImages = styled.div`
    display: flex;
     flex-wrap: wrap;
     justify-content: space-evenly;
     gap: 42px;`;


export const ImageName = styled.p`
   text-transform: uppercase;
     font-family: 'Roboto';
    font-size: 12px;
     line-height: 1.17;
     color: white;
     align-items: center;
     text-align: center;
     letter-spacing: 0.02em;
     text-transform: uppercase;`;

export const Colum = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const SectionReport = styled.div`
  background: linear-gradient(115.74deg, #383847 23.54%, rgba(56, 56, 71, 0.29) 107.94%);
     box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
     border-radius: 30px;
     max-width: 1034px;
     padding: 20px 219px;
`;

export const BtnSection = styled.div`
  display: flex;
  flex-wrap: wrap;
   justify-content: center;
`;

export const BtnReport = styled.div`
padding:20px;
`;