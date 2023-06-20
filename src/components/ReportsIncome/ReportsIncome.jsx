import React from 'react';
import * as images from 'components/ReportsIncome/image';
import { ImageItem, ListImages, ImageName, Colum } from '../ReportsExpenses/ReportExpenses.styled';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const ReportIncom = () => {
   const imageKeys = Object.keys(images);

  return (
    <>
      <button>
          <MdKeyboardArrowLeft
            size="26"
            color="green"
          />
      </button>
      <h2>INCOMES</h2>
      <button >
          <MdKeyboardArrowRight size="26" color="green" />
        </button>
     <ListImages>
      {imageKeys.map((key) => (
        <Colum key={key}>
          <p>sum</p>
          <ImageItem><img src={images[key]} alt={key} /></ImageItem>
          <ImageName>{key}</ImageName>
        </Colum>
      ))}
    </ListImages>
   </>
    
  );
};

export default ReportIncom;
