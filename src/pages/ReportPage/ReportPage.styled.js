import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../utilits/mediaQuery';

export const StyledLink = styled(NavLink)`
  padding: 3px 10px;
  /* margin-bottom: 42px; */
  /* margin-top: 42px; */
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
  /* margin-right: 91px; */
  /* margin-left: auto; */
  margin: 42px 9px 42px;

  border-radius: 16px;

  /* gg */

  &:hover,
  &:focus {
    color: #42a652;

    border-bottom: none;
    box-shadow: 1px -1px 24px -2px #41a350;
  }

  @media screen and (min-width: 320px) and (max-width: 785px) {
    padding: 3px 10px;
    font-style: inherit;
    -webkit-box-pack: justify;
    justify-content: space-between;
    /* width: 114px; */
    height: 44px;
    color: rgb(199, 204, 220);
    letter-spacing: 1px;
    text-decoration: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: transparent;
    transition: color 0.2s ease-in-out 0s;
    margin: 42px 9px;
    border-radius: 16px;
    gap: 7px;
    flex-wrap: wrap;
    width: 170px;
    margin-right: auto;
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
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 32px;

  /* max-width: 1034px; */
  /* padding-top: 40px; */
`;
