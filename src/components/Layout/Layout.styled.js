import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import desktopRectangle from '../../img/decor-img/Rectangle-desctop@2x.png';
import tabletRectangle from '../../img/decor-img/Rectangle-tablet@2x.png';
export const Container = styled.main`
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 767px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 1023px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 118px;
    padding-right: 118px;
    max-width: 1280px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
     
    
   
    @media screen and (max-width: 767px) {
      background-image: none;
    }

    
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      background-image: url(${tabletRectangle});
      background-size: 135%;
    }

     
    @media screen and (min-width: 1024px) {
      background-image: url(${desktopRectangle});
      background-size: 100%;
    }
      
      background-repeat: no-repeat; 
  }    
  
  
  
`;

export const EllipseImg = styled.img`
  position: absolute;

  transform: translate(-38%, -40%);
  z-index: -1;
`;
