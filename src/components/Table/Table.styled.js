import styled from 'styled-components';
import { device } from '../../utilits/mediaQuery';

export const Div = styled.div`
  /* height: 400px; */
  border-radius: 30px 30px 0px 0px;
  border: 2px solid #474759;
  overflow: hidden;
  /* margin-left: 32px; */

  @media ${device.tablet} {
    width: 624px;
    /* height: 400px; */
    border-radius: 30px 30px 0px 0px;
    border: 2px solid #474759;
    overflow: hidden;
    /* margin-left: 32px; */
  }

  @media ${device.desktop} {
    width: 746px;
    /* height: 400px; */
    border-radius: 30px 30px 0px 0px;
    border: 2px solid #474759;
    overflow: hidden;
    /* margin-left: 32px; */
  }
`;
export const TableEL = styled.table`
  border-spacing: 0px;
  width: 100%;
  table-layout: fixed;
`;
export const Tr = styled.tr`
  @media ${device.tablet} {
    height: 36px;
  }

  @media ${device.desktop} {
    height: 38px;
  }
`;
export const Td = styled.td`
  width: 5%;
  border-bottom: 2px solid #474759;
  height: 38px;
  box-sizing: border-box;
  color: #c7ccdc;
  background: rgb(56, 56, 71);
  margin-left: 22px;
  padding-left: 40px;

  @media ${device.tablet} {
    width: 5%;
    border-bottom: 2px solid #474759;
    height: 36px;

    color: #c7ccdc;
    background: rgb(56, 56, 71);
    margin-left: 22px;
    padding-left: 32px;
  }

  @media ${device.desktop} {
    width: 5%;
    border-bottom: 2px solid #474759;
    height: 38px;
    color: #c7ccdc;
    background: rgb(56, 56, 71);
    margin-left: 22px;
    padding-left: 40px;
  }
`;
export const Thead = styled.thead`
  background-color: rgba(86, 86, 107, 0.5);
  color: white;
`;

export const Th = styled.th`
  height: 40px;
  /* width: 149px; */
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

export const Tbody = styled.tbody`
  display: block;
  /* display: table; */
  max-height: 100%;
  overflow-y: auto;
  width: 624px;
  scroll-behavior: smooth;
  height: 342px;
  border-collapse: collapse;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #60c470 #474759;
  &::-webkit-scrollbar {
    width: 7px;
    background-color: #474759;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #60c470;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track-piece {
    max-height: 242px;
  }

  @media ${device.tablet} {
    display: block;
    /* display: table; */
    max-height: 100%;
    overflow-y: auto;
    width: 624px;
    scroll-behavior: smooth;
    height: 324px;
    border-collapse: collapse;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: #60c470 #474759;
    &::-webkit-scrollbar {
      width: 6px;
      background-color: #474759;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #60c470;
      border-radius: 7px;
    }

    &::-webkit-scrollbar-track-piece {
      max-height: 242px;
    }
  }

  @media ${device.desktop} {
    display: block;
    /* display: table; */
    max-height: 100%;
    overflow-y: auto;
    width: 746px;
    scroll-behavior: smooth;
    height: 342px;
    border-collapse: collapse;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: #60c470 #474759;
  }
`;

export const Section = styled.div`
  padding-bottom: 30px;
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
  color: #c7ccdc;
  font-size: 8px;
  font-family: Roboto;
  letter-spacing: 0.32px;
  margin-right: 20px;
`;

export const PeshkaBig = styled.div`
  color: #c7ccdc;
  font-size: 12px;
  font-family: Roboto;
  font-weight: 700;
  letter-spacing: 0.48px;
  margin-bottom: 20px;
`;

export const PeshkaBtn = styled.div`
  margin-left: 8px;
`;
