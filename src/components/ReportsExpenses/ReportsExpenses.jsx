import React, { useState, useEffect } from 'react';
import * as expensesImages from 'components/ReportsExpenses/image';
import * as incomeImages from 'components/ReportsExpenses/imageIncome';
import { ImageItem, ListImages, ImageName, Colum, SectionReport, BtnSection, BtnReport } from './ReportExpenses.styled';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ChartBar from '../ChartBar/ChartBar';
import { ChartBarContainer, ChartBarContainerIncomes } from 'components/ChartBar/ChartBar.styled';
import ChartBarIncome from 'components/ChartBarIncome/CartBarIncome';
import { getTransactionsReports } from 'services/walletApi';

const ReportsContainer = () => {
  const [reportType, setReportType] = useState('EXPENSES');
  const [data, setData] = useState(null);

  const formattedDate = `2023-06`;
  // console.log(formattedDate);
  useEffect(() => {
  const fetchData = async () => {
    try {
      const result = await getTransactionsReports(formattedDate);
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, [formattedDate]);

  const handleToggleReport = () => {
    setReportType(prevType => (prevType === 'EXPENSES' ? 'INCOME' : 'EXPENSES'));
  };

  const expensesImagesMap = {
    "Продукты": {
      label: "Products",
      icon: expensesImages.products,
    },
    "Алкоголь": {
      label: "Alcohol",
      icon: expensesImages.alcogol,
    },
    "Развлечения": {
      label: "Entertainment",
      icon: expensesImages.entertainment,
    },
    "Здоровье": {
      label: "Health",
      icon: expensesImages.health,
    },
    "Транспорт": {
      label: "Transport",
      icon: expensesImages.transport,
    },
    "Всё для дома": {
      label: "Housing",
      icon: expensesImages.housing,
    },
    "Техника": {
      label: "Technique",
      icon: expensesImages.technique,
    },
    "Коммуналка и связь": {
      label: "Communal, communication",
      icon: expensesImages.communal,
    },
    "Спорт и хобби": {
      label: "Sports, hobbies",
      icon: expensesImages.sports_hobbies,
    },
    "Образование": {
      label: "Education",
      icon: expensesImages.education,
    },
    "Прочее": {
      label: "Other",
      icon: expensesImages.other,
    },
  };

  const incomeImagesMap = {
    "Зарплата": {
      label: "Salary",
      icon: incomeImages.salary,
    },
    "Дополнительный доход": {
      label: "Add. income",
      icon: incomeImages.add_income,
    },
  };
  const categoriesMap = reportType === 'EXPENSES' ? expensesImagesMap : incomeImagesMap;

  let categoriesList = [];
  if (data) {
    categoriesList = Object.entries(categoriesMap).map(([key, value]) => {
      const categoryData = reportType === 'EXPENSES' ? data.expenses.expensesData[key] : data.incomes.incomesData[key];
      const categoryAmount = categoryData ? categoryData.total : 0;

      return {
        categoryName: value.label,
        categoryIcon: value.icon,
        categoryAmount: categoryAmount,
      };
    });
  }

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
      <ImageName>{category.categoryAmount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}</ImageName>
      <ImageItem>
        <img src={category.categoryIcon} alt={category.categoryName} />
      </ImageItem>
      <ImageName>{category.categoryName}</ImageName>
    </Colum>
  ))}
</ListImages>
      </SectionReport>
      <ChartBarContainer>
        <ChartBar />
      </ChartBarContainer>
      <ChartBarContainerIncomes>
        <ChartBarIncome />
      </ChartBarContainerIncomes>
    </>
  );
};

export default ReportsContainer;
