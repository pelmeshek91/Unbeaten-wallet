import React, { useState, useEffect, useCallback } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import date from 'date-and-time';
import { useDispatch } from 'react-redux';
import { getTransactionsReportsThunk } from '../../redux/transcactions/transcactionsOperations';

const ReportChanger = ({ onClick }) => {
  const data = new Date();

  const [count, setCount] = useState(0);
  const [newData, setNewData] = useState(date.addMonths(data, count));

  const dispatch = useDispatch();

  const fetchData = useCallback(() => {
    const formattedDate = date.format(newData, 'YYYY-MM');
    dispatch(getTransactionsReportsThunk(formattedDate))
      .then(response => {
        onClick(response.payload);
      })
      .catch(error => {
        console.error('Error fetching transaction data:', error);
      });
  }, [newData, onClick, dispatch]);

  const handleData = value => {
    if (value > 0 && count === 0) return null;
    setCount(prev => prev + value);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    onClick(date.format(newData, 'YYYY-MM'));
  }, [newData, onClick]);

  return (
    <div>
      <p>Current period:</p>
      <div>
        <button>
          <MdKeyboardArrowLeft
            size="20"
            color="green"
            onClick={() => {
              handleData(-1);
              setNewData(date.addMonths(newData, -1));
            }}
          />
        </button>
        <span>{date.format(newData, 'MMMM YYYY')}</span>
        <button>
          <MdKeyboardArrowRight
            size="20"
            color="green"
            onClick={() => {
              handleData(1);
              setNewData(date.addMonths(newData, 1));
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default ReportChanger;
