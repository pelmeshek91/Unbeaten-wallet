import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 380px;
  height: 175px;
  background: #383847;
`;

export const GrClose = styled.svg`
  color: #c7ccdc;
`;

export const Question = styled.p`
  color: #c7ccdc;
`;

export const BtnContainer = styled.div`
  display: flex;
`;

export const YesBtn = styled.button`
  width: 125px;
  height: 44px;
  color: #c7ccdc;
  background: transparent;
  box-shadow: 1px 3px 5px rgba(96, 196, 112, 0.35);
  border-radius: 16px;
  &:hover,
  &:focus {
    color: #42a652;
  }
`;
export const NoBtn = styled.button`
  width: 125px;
  height: 44px;
  color: #c7ccdc;
  background: transparent;
  box-shadow: 1px 3px 5px rgba(96, 196, 112, 0.35);
  border-radius: 16px;
  &:hover,
  &:focus {
    color: #42a652;
  }
`;
