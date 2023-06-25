import styled from 'styled-components';

export const Section = styled.div`
  margin: auto;
  background-color: transparent;
`;

export const TrashBtn = styled.button`
  border-color: transparent;
  width: 30px;
  height: 30px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
  border: 0;
  border-radius: 4px;
  background-color: rgba(86, 86, 107, 0.1);
  cursor: pointer;

  &:hover {
    fill: #f6f7fb !important;
    transition: fill 0.3s ease-in-out;
    background-color: rgba(86, 86, 107, 0.5);
  }
`;

export const Lishka = styled.li`
list-style: none;
display: flex;
    border-bottom: 2px solid #474759;
width: 282px;
justify-content: space-between;

`;

export const DivchykFlex = styled.div`
display: flex;
align-items: center;
`;

export const PeshkaLitl = styled.div`
color: #C7CCDC;
font-size: 8px;
font-family: Roboto;
letter-spacing: 0.32px;
margin-right: 20px;
`;

export const PeshkaBig = styled.div`
color: #C7CCDC;
font-size: 12px;
font-family: Roboto;
font-weight: 700;
letter-spacing: 0.48px;
margin-bottom: 20px;
`;

export const PeshkaBtn = styled.div`
margin-left: 8px;

`;