import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const ButtonLink = styled(NavLink)`
  display: inline-block;
  background-color: #2d2d38;
  width: 138px;
  height: 40px;
  color: #f6f7fb;
  text-decoration: none;
  border: none;
  outline: none;
  text-align: center;
  border-radius: 16px 16px 0px 0px;
  padding-top: 15px;
  &.active {
    background-color: #383847;
    color: #60c470;
  }
`;
