import styled from 'styled-components';
export const Div = styled.div`
  width: 746px;
  height: 400px;
  border-radius: 30px 30px 0px 0px;
  border: 2px solid #474759;
  overflow: hidden;
  margin-left: 32px;
`;
export const TableEL = styled.table`
  border-spacing: 0px;
`;
export const Tr = styled.tr`
  height: 36px;
`;
export const Td = styled.td`
  width: calc(100% / 5);
  border-bottom: 2px solid #474759;
  height: 36px;

  /* margin: 0; */
  color: #c7ccdc;
  background: rgb(56, 56, 71);
  margin-left: 22px;
  padding-left: 50px;
`;
export const Thead = styled.thead`
  background-color: rgba(86, 86, 107, 0.5);
  color: white;
`;

export const HeaderContainer = styled.div`
  display: flex;
  background-color: rgba(86, 86, 107, 0.5);
  color: white;
  gap: 25px;
`;

export const PDate = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  margin-left: 55px;
`;
export const PDescr = styled.p`
  margin-left: 50px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  margin-left: 55px;
`;
export const PCateg = styled.p`
  margin-left: 74px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  margin-left: 55px;
`;
export const PSum = styled.p`
  margin-left: 70px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  margin-left: 55px;
`;

export const Th = styled.th`
  height: 40px;
  /* width: 149px; */
`;

export const TrashBtn = styled.button`
  background: rgba(86, 86, 107, 0.5);
`;

export const Tbody = styled.tbody`
  display: block;
  max-height: 100%;
  overflow-y: auto;
  width: 746px;
  scroll-behavior: smooth;
  height: 380px;
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
`;
