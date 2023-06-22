import { useNavigate } from 'react-router-dom';
import ReportsExpenses from 'components/ReportsExpenses/ReportsExpenses';

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
      <ReportsExpenses />;
    </>
  );
};

export default ReportPage;
