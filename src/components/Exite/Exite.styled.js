import styled from 'styled-components';
import { RxExit } from 'react-icons/rx';

export const StyledExitIcon = styled(RxExit)`
  width: 16px;
  height: 16px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ExiteContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
`;

export const UserIcon = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  background: #474759;
  border-radius: 50%;
`;

export const FirstLetter = styled.span`
  color: #c7ccdc;
`;

export const UserName = styled.p`
  color: #c7ccdc;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  padding-right: 20px;
  padding-left: 12px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const VerticalLine = styled.span`
  color: #c7ccdc;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ExitBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #c7ccdc;
  /* width: 22px;
  height: 14px; */
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  text-decoration-line: underline;
  display: flex; /* Додано */
  justify-content: center; /* Додано */
  align-items: center; /* Додано */
  padding: 20px 0 20px 20px;
`;

export const SpanText = styled.span`
  @media (max-width: 767px) {
    display: none;
  }
`;
