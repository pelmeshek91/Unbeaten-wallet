import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import date from 'date-and-time';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsReportsThunk } from '../../redux/transcactions/transcactionsOperations';

const ReportChanger = () => {
  const data = new Date();
  const { isLogin } = useSelector(state => state.auth);
  const [count, setCount] = useState(0);
  const [newData, setNewData] = useState(date.addMonths(data, count));
  const dispatch = useDispatch();

  useEffect(() => {
    const formattedDate = date.format(newData, 'YYYY-MM');
    if (!isLogin) return;

    dispatch(getTransactionsReportsThunk(formattedDate))
      .unwrap()
      .then(() => {})
      .catch(error => {
        console.error('Error fetching transaction data:', error);
      });
  }, [dispatch, isLogin, newData]);

  const handleData = value => {
    if (value > 0 && count === 0) return null;
    setCount(prev => prev + value);
  };

  return (
    <div>
      <p>Current period:</p>
      <div>
        <button
          onClick={() => {
            handleData(-1);
            setNewData(date.addMonths(newData, -1));
          }}
        >
          <MdKeyboardArrowLeft size="20" color="green" />
        </button>
        <span>{date.format(newData, 'MMMM YYYY')}</span>
        <button
          onClick={() => {
            handleData(1);
            setNewData(date.addMonths(newData, 1));
          }}
        >
          <MdKeyboardArrowRight size="20" color="green" />
        </button>
      </div>
    </div>
  );
};

export default ReportChanger;
