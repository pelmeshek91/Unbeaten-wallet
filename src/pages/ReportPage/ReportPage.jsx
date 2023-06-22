import { useNavigate } from 'react-router-dom';
import ReportsExpenses from 'components/ReportsExpenses/ReportsExpenses';
import ReportChanger from 'components/ReportChanger/ReportChanger';

const ReportPage = () => {
  const navigate = useNavigate();

  const onBtnClick = () => {
    navigate('/expenses');
  };
  const handleClick = selectedPeriod => {
    // Логика обработки выбранного периода
    console.log(selectedPeriod);
  };
  return (
    <>
      {/* <ReportChanger onClick={handleClick} /> */}
      <div>
        <button type="button" onClick={onBtnClick}>
          Main page
        </button>
      </div>
      <ReportsExpenses />;
    </>
  );
};

export default ReportPage;
