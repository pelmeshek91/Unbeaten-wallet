import ReportsExpenses from 'components/ReportsExpenses/ReportsExpenses';
import ReportChanger from 'components/ReportChanger/ReportChanger';
import ReportAmount from 'components/ReportsIncome/ReportsAmount';
import { GoMainBtn, ReportContainer } from './ReportPage.styled';
import { StyledLink } from './ReportPage.styled';
import { ImArrowLeft2 } from 'react-icons/im';
import TotalBalance from 'components/TotalBalance/TotalBalance';

const ReportPage = () => {
  return (
    <>
      <StyledLink to="expenses">
        <ImArrowLeft2 />
        Main page
      </StyledLink>
      <>
        <ReportChanger />

        <TotalBalance />
        <ReportChanger />
      </ReportContainer>
      <ReportAmount />
      <ReportsExpenses />
    </>
  );
};

export default ReportPage;
