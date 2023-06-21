import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 213px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  max-height: 290px;
  overflow: hidden;
  margin-left: 77px;
`;

export const Thead = styled.thead`
  background-color: rgba(86, 86, 107, 0.5);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

export const SummaryTable = styled.table`
  display: none;
  @media screen and (min-width: 768px) {
    display: table;
    width: 100%;
    border-collapse: collapse;
    // border-spacing: 0 2px;
  }
`;

export const SummaryTableHeading = styled.th`
  padding: 10px 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #f6f7fb;
  // border-bottom: 4px solid #383847;
  font-size: 0.9em;
  /* font-family: 'Roboto'; */
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  &:first-child {
    text-align: left;
  }

  &:last-child {
    text-align: center;
  }
`;

export const SummaryLine = styled.tr`
  border-bottom: 2px solid transparent;
  display: table;
  table-layout: fixed;
  width: 100%;

  &:first-of-type {
    border-top: 4px solid transparent;
  }
`;

export const SummaryTableCell = styled.td`
  padding-left: 12px;
  text-align: left;
  vertical-align: middle;
  padding: 12px 0 12px 12px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #c7ccdc;
  background: rgba(86, 86, 107, 0.5);

  &:first-child {
    border-right: none;
  }

  &:nth-child(2) {
    padding-left: 0px;
    padding-right: 12px;
    text-align: right;
  }
`;

export const SummaryTableWrapper = styled.tbody`
  display: block;
  max-height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #60c470 #474759;
  height: 242px;
  border-collapse: collapse;
  scrollbar-color: #60c470 #474759;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #474759;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #60c470;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track-piece {
    max-height: 242px;
  }
`;

export const SummaryBody = styled.tbody`
  display: block;
`;
