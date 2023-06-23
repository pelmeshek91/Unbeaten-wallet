import { useNavigate } from 'react-router-dom';
import ReportsExpenses from 'components/ReportsExpenses/ReportsExpenses';
import ReportChanger from 'components/ReportChanger/ReportChanger';
import ReportAmount from 'components/ReportsIncome/ReportsAmount';
import { GoMainBtn, ReportContainer } from './ReportPage.styled';
import { ImArrowLeft2 } from 'react-icons/im';
import { BsArrowLeft } from 'react-icons/bs';
// import { BackBtn, BackContainer, BtnName } from './ReportPage.styled';
import TotalBalance from 'components/TotalBalance/TotalBalance';

const ReportPage = () => {
  const navigate = useNavigate();

  const onBtnClick = () => {
    navigate('/expenses');
  };

  return (
    <>
      <ReportContainer>
        <GoMainBtn type="button" onClick={onBtnClick}>
          <ImArrowLeft2 />
          Main page
        </GoMainBtn>
        <TotalBalance />
        <ReportChanger />
      </ReportContainer>
      <ReportAmount />
      <ReportsExpenses />
    </>
  );
};

export default ReportPage;
