import { useNavigate } from 'react-router-dom';
import ReportsExpenses from 'components/ReportsExpenses/ReportsExpenses';
import ReportChanger from 'components/ReportChanger/ReportChanger';
import ReportAmount from 'components/ReportsIncome/ReportsAmount';
import { BsArrowLeft } from 'react-icons/bs';
import { BackBtn, BackContainer, BtnName } from './ReportPage.styled';
import TotalBalance from 'components/TotalBalance/TotalBalance';

const ReportPage = () => {
  const navigate = useNavigate();

  const onBtnClick = () => {
    navigate('/expenses');
  };

  return (
    <>
      <>
        <ReportChanger />
        <BackContainer>
          <BackBtn type="button" onClick={onBtnClick}>
            <BsArrowLeft style={{ width: '24px', height: '24px' }} />
          </BackBtn>
          <BtnName>Main page</BtnName>
        </BackContainer>
        <TotalBalance />
      </>

      <ReportAmount />
      <ReportsExpenses />
    </>
  );
};

export default ReportPage;
