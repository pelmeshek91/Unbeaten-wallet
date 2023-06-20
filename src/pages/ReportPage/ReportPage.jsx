import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ReportPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkLocationRef = useRef(location?.state?.from ?? '/');

  const onBtnClick = () => {
    navigate(backLinkLocationRef.current);
  };
  return (
    <div>
      <button type="button" onClick={onBtnClick}>
        Main page
      </button>
    </div>
  );
};

export default ReportPage;
