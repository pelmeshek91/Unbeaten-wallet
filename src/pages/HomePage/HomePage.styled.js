import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { device } from 'utilits/mediaQuery';

export const ButtonLink = styled(NavLink)`
  display: inline-block;
  background-color: #2d2d38;
  width: 138px;

  color: #f6f7fb;
  text-decoration: none;
  border: none;
  outline: none;
  text-align: center;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  &.active {
    background-color: #383847;
    background-color: rgb(56, 56, 71);
    color: #60c470;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 12px 25px;

  display: flex;
  align-items: center;
  font-style: inherit;
  justify-content: space-between;
  width: 84px;
  height: 24px;
  color: #7a7d8b;
  letter-spacing: 1px;
  text-decoration: none;
  display: inline-flex;

  border-bottom: none;
  border: transparent;

  border-radius: 4px;
  transition: color 0.3s ease-in-out;
  /* margin-right: 91px; */

  border-radius: 16px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: row;
  }
  @media screen and (min-width: 1100px) {
  }
  @media ${device.desktop} {
    margin-left: auto;
  }

  &:hover,
  &:focus {
    color: #42a652;
    border-bottom: none;
    box-shadow: 1px -1px 24px -2px #41a350;
  }
`;

export const Wrapper = styled.div`
  flex-direction: column-reverse;
  padding: 0;
  display: flex;

  margin-top: 40px;
  margin-bottom: 8px;

  @media screen and (min-width: 767px) {
    display: flex;
    margin-bottom: 40px;
    padding-left: 0px;
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 150px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: row;
  }
`;
