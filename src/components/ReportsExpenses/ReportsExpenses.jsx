import React, { useState } from 'react';
import * as expensesImages from 'components/ReportsExpenses/image';
import * as incomeImages from 'components/ReportsIncome/image';
import { ImageItem, ListImages, ImageName, Colum, SectionReport, BtnSection, BtnReport } from './ReportExpenses.styled';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const ReportsContainer = () => {
  const [reportType, setReportType] = useState('EXPENSES');

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

  // const images = reportType === 'EXPENSES' ? expensesImagesMap : incomeImagesMap;
  const categoriesMap = reportType === 'EXPENSES' ? expensesImagesMap : incomeImagesMap;

  const categoriesList = Object.entries(categoriesMap).map(([key, value]) => ({
    categoryName: value.label,
    categoryIcon: value.icon,
  }));

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
              <p>amount</p>
              <ImageItem>
                <img src={category.categoryIcon} alt={category.categoryName} />
              </ImageItem>
              <ImageName>{category.categoryName}</ImageName>
            </Colum>
          ))}
        </ListImages>
      </SectionReport>
    </>
  );
};

export default ReportsContainer;

