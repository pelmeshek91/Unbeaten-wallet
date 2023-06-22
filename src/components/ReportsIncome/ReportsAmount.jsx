import React from 'react';
import {FormAmount, TextAmound, TotalAmoundPlus, TotalAmoundMin} from './ReportAmount.styled'

const ReportAmount = () => {

  return (
    <FormAmount>
      <div>
        <TextAmound>Expenses:</TextAmound>
        <TotalAmoundMin>+ total UAH.</TotalAmoundMin>
      </div>

      <div>
        <TextAmound>Income:</TextAmound>
        <TotalAmoundPlus>- total UAH.</TotalAmoundPlus>
      </div>
   </FormAmount>
  );
};

export default ReportAmount;
