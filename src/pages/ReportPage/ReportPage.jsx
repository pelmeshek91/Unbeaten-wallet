import { useNavigate } from 'react-router-dom';
import ReportsExpenses from 'components/ReportsExpenses/ReportsExpenses';
import ReportChanger from 'components/ReportChanger/ReportChanger';
import ReportAmount from 'components/ReportsIncome/ReportsAmount';

const ReportPage = () => {
  const navigate = useNavigate();

  const onBtnClick = () => {
    navigate('/expenses');
  };
  const handleClick = selectedPeriod => {
    console.log(selectedPeriod);
  };
  return (
    <>
      <ReportChanger onClick={handleClick} />
      <div>
        <button type="button" onClick={onBtnClick}>
          Main page
        </button>
      </div>
      <ReportAmount />
      <ReportsExpenses />
    </>
  );
};

export default ReportPage;
