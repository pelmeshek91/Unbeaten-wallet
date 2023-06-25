import styled from '@emotion/styled';
import { device } from 'utilits/mediaQuery';
export const ChartBarContainer = styled.div`
  background: linear-gradient(
    115.74deg,
    #383847 23.54%,
    rgba(56, 56, 71, 0.29) 107.94%
  );
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  padding-top: 22px;
  padding-bottom: 22px;
  margin-bottom: 80px;

 
  @media ${device.desktop} {
    padding-top: 23px;
    padding-bottom: 23px;
  }
`;