import ReportsExpenses from 'components/ReportsExpenses/ReportsExpenses';
import ReportChanger from 'components/ReportChanger/ReportChanger';
import ReportAmount from 'components/ReportsIncome/ReportsAmount';
import { ReportContainer } from './ReportPage.styled';
import { StyledLink } from './ReportPage.styled';
import { ImArrowLeft2 } from 'react-icons/im';
import TotalBalance from 'components/TotalBalance/TotalBalance';
import { useMediaQuery } from 'react-responsive';
import { device } from 'utilits/mediaQuery';

const ReportPage = () => {
  const isMobile = useMediaQuery({
    query: `(${device.mobileM}) and (${device.mobileL})`,
  });
  return (
    <>
      <ReportContainer>
        {!isMobile ? (
          <StyledLink to="expenses">
            <ImArrowLeft2 />
            TO TRANSACTION
          </StyledLink>
        ) : (
          <StyledLink to="expenses">
            <ImArrowLeft2 />
            Main page
          </StyledLink>
        )}

        <TotalBalance />
        <ReportChanger />
      </ReportContainer>
      <ReportAmount />
      <ReportsExpenses />
    </>
  );
};

export default ReportPage;
