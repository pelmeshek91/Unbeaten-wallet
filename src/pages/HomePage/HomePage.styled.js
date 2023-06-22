import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonLink = styled(NavLink)`
  display: inline-block;
  background-color: #2d2d38;
  width: 138px;
  /* height: 40px; */
  color: #f6f7fb;
  text-decoration: none;
  border: none;
  outline: none;
  text-align: center;
  /* border-radius: 16px 16px 0px 0px; */
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
