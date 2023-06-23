import styled from 'styled-components';

export const ReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Descr = styled.p`
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
  font-style: normal;
  color: #80848f;
`;

export const BtnContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

export const Description = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 200%;
  text-transform: uppercase;
  padding: 0px 7px;
`;

export const Btn = styled.button`
  border: none;
  display: flex;
  color: green;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    border: none;
    background-color: transparent;
    border-radius: 4px;
    box-shadow: 0px 0px 6px #41a350;
  }
`;
