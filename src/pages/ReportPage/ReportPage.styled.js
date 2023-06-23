import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  padding: 3px 10px;
  margin-bottom: 42px;
  margin-top: 42px;
  display: flex;
  align-items: center;
  font-style: inherit;
  justify-content: space-between;
  width: 114px;
  height: 44px;
  color: #c7ccdc;
  letter-spacing: 1px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  border-bottom: none;
  border: transparent;

  border-radius: 4px;
  transition: color 0.2s ease-in-out;
  margin-right: 91px;
  margin-left: auto;

  border-radius: 16px;

  &:hover,
  &:focus {
    color: #42a652;

    border-bottom: none;
    box-shadow: 1px -1px 24px -2px #41a350;
  }
`;

export const BackContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  cursor: pointer;
`;

export const BtnName = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.04em;
  text-align: center;
  text-decoration: none;
  color: #c7ccdc;
`;

export const BackBtn = styled.button`
  background: none;
  border: none;
  /* color: white; */
  color: black;
  cursor: pointer;
`;

export const ReportContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  /* max-width: 1034px; */
  /* padding-top: 40px; */
`;
