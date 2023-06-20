import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReportsExpenses from 'components/ReportsExpenses/ReportsExpenses';
import ReportIncom from 'components/ReportsIncome/ReportsIncome';

const ReportPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkLocationRef = useRef(location?.state?.from ?? '/');

  const onBtnClick = () => {
    navigate(backLinkLocationRef.current);
  };

  return <>
     <div>
      <button type="button" onClick={onBtnClick}>
        Main page
      </button>
    </div>

    <ReportsExpenses />;
    <ReportIncom/>;
  </>;
};

export default ReportPage;
