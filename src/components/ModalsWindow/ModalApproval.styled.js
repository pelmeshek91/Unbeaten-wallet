import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: inset 0px 2px 14px rgba(132, 132, 132, 0.2);
  backdrop-filter: blur(8px);
  /* opacity: 0.7; */
  z-index: 9998;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 380px;
  max-height: 175px;
  background: #383847;
  border: 1px solid;
  border-radius: 16px;

  /* * */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  padding: 40px 57px;

  border: none;
  box-shadow: 1px -1px 24px -2px #41a350;
`;

export const StyledExitIcon = styled(MdOutlineClose)`
  color: #c7ccdc;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  &:hover,
  &:focus {
    color: #42a652;
  }
`;

export const Question = styled.p`
  color: #c7ccdc;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 32px;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const YesBtn = styled.button`
  width: 125px;
  height: 44px;
  color: #c7ccdc;
  background: transparent;
  border: none;
  border: 2px solid #474759;
  border-color: #474759;
  box-shadow: 1px 3px 5px #272732;
  border-radius: 16px;
  &:hover,
  &:focus {
    background-color: #42a652;
    box-shadow: 1px 3px 5px rgba(96, 196, 112, 0.35);
  }
`;
export const NoBtn = styled.button`
  width: 125px;
  height: 44px;
  color: #c7ccdc;
  background: transparent;
  border: none;
  border: 2px solid #474759;
  border-color: #474759;
  box-shadow: 1px 3px 5px #272732;
  border-radius: 16px;
  &:hover,
  &:focus {
    background-color: #42a652;
    box-shadow: 1px 3px 5px rgba(96, 196, 112, 0.35);
  }
`;
