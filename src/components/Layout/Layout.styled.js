import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import desktopRectangle from '../../img/decor-img/Rectangle-desctop@2x.png';

import tabletRectangle from '../../img/decor-img/Rectangle-tablet@2x.png';
export const Container = styled.div`
  margin: 0 auto;

  padding-left: 20px;
  padding-right: 20px;
  width: 280px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 118px;
    padding-right: 118px;
    width: 1098px;
  }
`;
export const GlobalStyle = createGlobalStyle`
  body {
      @media screen and (max-width: 767px) {
      background-image: none;
    }

    
    @media screen and (min-width: 768px) {
      body {
      background-image: url(${tabletRectangle});
      background-size: 140%;
      background-repeat: no-repeat;
      background-position: left 40% top 90%;
    }
    }

     
    @media screen and (min-width: 1200px) {
      body{      background-image: url(${desktopRectangle});
      background-size: 115%;
      background-position: left 30% top 10%  ;}

    }
      
      background-repeat: no-repeat; 
     

    
  }
   
  
  
`;

export const EllipseImg = styled.img`
  position: absolute;
  height: 650px;
  transform: translate(-38%, -40%);
  z-index: -1;
`;
