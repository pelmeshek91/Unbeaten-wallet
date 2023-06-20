import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
export const TransactionsSummary = () => {
  const [incomes, setIncomes] = useState();
  const [expenses, setExpenses] = useState();
  const [transactionType] = useState('expenses');

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: 38 }}>
            <td></td>
            <td></td>
          </tr>
          <tr style={{ height: 38 }}>
            <td></td>
            <td></td>
          </tr>
          <tr style={{ height: 38 }}>
            <td></td>
            <td></td>
          </tr>
          <tr style={{ height: 38 }}>
            <td></td>
            <td></td>
          </tr>
          <tr style={{ height: 38 }}>
            <td></td>
            <td></td>
          </tr>
          <tr style={{ height: 38 }}>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
