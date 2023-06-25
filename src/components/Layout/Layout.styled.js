import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import desktopRectangle from '../../img/decor-img/Rectangle-desctop@2x.png';
import tabletRectangle from '../../img/decor-img/Rectangle-tablet@2x.png';
export const Container = styled.main`
  /* width: 1280px; */
  max-width: 1280px;
  margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`
  body {
     
    
   
    @media screen and (max-width: 766px) {
      background-image: none;
    }

    
    @media screen and (min-width: 766px) and (max-width: 1023px) {
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
