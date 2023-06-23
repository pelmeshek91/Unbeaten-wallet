import { useNavigate } from 'react-router-dom';
import ReportsExpenses from 'components/ReportsExpenses/ReportsExpenses';
import ReportAmount from 'components/ReportsIncome/ReportsAmount';
import { GoMainBtn } from './ReportPage.styled';
import { ImArrowLeft2 } from 'react-icons/im';
const ReportPage = () => {
  const navigate = useNavigate();

  const onBtnClick = () => {
    navigate('/expenses');
  };

  return (
    <>
      <div>
        <GoMainBtn type="button" onClick={onBtnClick}>
          <ImArrowLeft2 />
          Main page
        </GoMainBtn>
      </div>
      <ReportAmount />
      <ReportsExpenses />
    </>
  );
};

export default ReportPage;
