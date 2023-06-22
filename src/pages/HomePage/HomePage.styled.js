import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import background from '../../img/decor-img/background.jpg';
import ellipse from '../../img/decor-img/Ellipse-bigger.png';

export const BodyContainer = styled.div`
  /* background-color: #383847;
  background-image: url(${background});
  z-index: -2; */
`;

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
    color: #60c470;
  }
`;

export const EllipseImg = styled.img`
  position: absolute;
  /* top: -350px;
  left: -406px;   */
  transform: translate(-38%, -40%);
  z-index: -1;
`;

export const RectangleImg = styled.img`
  position: absolute;
  /* top: 0px;
  left: 0px; */
  transform: translate(-4%, -46%);
  z-index: -1;
`;
