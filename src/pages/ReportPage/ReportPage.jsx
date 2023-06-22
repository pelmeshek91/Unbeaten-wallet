import { useNavigate } from 'react-router-dom';
import ReportsExpenses from 'components/ReportsExpenses/ReportsExpenses';
import ReportAmount from 'components/ReportsIncome/ReportsAmount';

const ReportPage = () => {
  const navigate = useNavigate();

  const onBtnClick = () => {
    navigate('/expenses');
  };

  return (
    <>
      <div>
        <button type="button" onClick={onBtnClick}>
          Main page
        </button>
      </div>
      <ReportAmount/>
      <ReportsExpenses />
    </>
  );
};

export default ReportPage;
