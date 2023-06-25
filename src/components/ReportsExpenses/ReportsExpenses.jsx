import React, { useState, useEffect } from 'react';
import * as expensesImages from 'components/ReportsExpenses/image';
import * as incomeImages from 'components/ReportsExpenses/imageIncome';
import {
  ImageItem,
  ListImages,
  ImageName,
  Colum,
  SectionReport,
  BtnSection,
  BtnReport,
} from './ReportExpenses.styled';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ChartBar from '../ChartBar/ChartBar';
import { ChartBarContainer } from 'components/ChartBar/ChartBar.styled';

import { useSelector } from 'react-redux';
import ChartBarMobile from '../Mobile/MobileChartBar/MobileChartBar';
import {MobileChBarContainer} from '../Mobile/MobileChartBar/MobileChartBar.styled'


const ReportsContainer = () => {
  const [reportType, setReportType] = useState('EXPENSES');
  const [list, setList] = useState(null);
  const { transactions } = useSelector(state => state.transactions);

  const handleToggleReport = () => {
    setReportType(prevType =>
      prevType === 'EXPENSES' ? 'INCOME' : 'EXPENSES'
    );
  };

  const expensesImagesMap = {
    Продукты: {
      label: 'Products',
      icon: expensesImages.products,
    },
    Алкоголь: {
      label: 'Alcohol',
      icon: expensesImages.alcogol,
    },
    Развлечения: {
      label: 'Entertainment',
      icon: expensesImages.entertainment,
    },
    Здоровье: {
      label: 'Health',
      icon: expensesImages.health,
    },
    Транспорт: {
      label: 'Transport',
      icon: expensesImages.transport,
    },
    'Всё для дома': {
      label: 'Housing',
      icon: expensesImages.housing,
    },
    Техника: {
      label: 'Technique',
      icon: expensesImages.technique,
    },
    'Коммуналка и связь': {
      label: 'Communal, communication',
      icon: expensesImages.communal,
    },
    'Спорт и хобби': {
      label: 'Sports, hobbies',
      icon: expensesImages.sports_hobbies,
    },
    Образование: {
      label: 'Education',
      icon: expensesImages.education,
    },
    Прочее: {
      label: 'Other',
      icon: expensesImages.other,
    },
  };

  const incomeImagesMap = {
    'З/П': {
      label: 'Salary',
      icon: incomeImages.salary,
    },
    'Доп. доход': {
      label: 'Add. income',
      icon: incomeImages.add_income,
    },
  };
  const categoriesMap =
    reportType === 'EXPENSES' ? expensesImagesMap : incomeImagesMap;

  let categoriesList = [];

  if (transactions) {
    categoriesList = Object.entries(categoriesMap)
      .map(([key, value]) => {
        const categoryData =
          reportType === 'EXPENSES'
            ? transactions.expenses.expensesData[key]
            : transactions.incomes.incomesData[key];

        const categoryAmount = categoryData ? categoryData.total : 0;

        return {
          categoryDataList: categoryData,
          categoryName: value.label,
          categoryIcon: value.icon,
          categoryAmount: categoryAmount,
        };
      })
      .sort((a, b) => b.categoryAmount - a.categoryAmount)
      .filter(({ categoryAmount }) => categoryAmount !== 0);
  }
  useEffect(() => {
    if (!transactions) return;
    setList(categoriesList[0]?.categoryDataList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reportType, transactions]);

  return (
    <>
      <SectionReport>
        <BtnSection>
          <BtnReport onClick={handleToggleReport}>
            <MdKeyboardArrowLeft size="26" color="green" />
          </BtnReport>
          <h2>{reportType}</h2>
          <BtnReport onClick={handleToggleReport}>
            <MdKeyboardArrowRight size="26" color="green" />
          </BtnReport>
        </BtnSection>

        <ListImages>
          {categoriesList.map((category, index) => (
            <Colum key={index}>
              <ImageName>
                {category.categoryAmount.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </ImageName>

              <ImageItem onClick={() => setList(category.categoryDataList)}>
                <img src={category.categoryIcon} alt={category.categoryName} />
              </ImageItem>
              <ImageName>{category.categoryName}</ImageName>
            </Colum>
          ))}
        </ListImages>
      </SectionReport>
      {list && (
        <ChartBarContainer>
          <ChartBar list={list} />
        </ChartBarContainer>
      )}
      {/* {list && (
        <MobileChBarContainer >
          <ChartBarMobile list={list} />
        </MobileChBarContainer>
      )} */}
    </>
  );
};

export default ReportsContainer;
