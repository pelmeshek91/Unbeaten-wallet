import React from 'react';
import * as images from 'components/ReportsIncome/image';
import { ImageItem, ListImages, ImageName, Colum } from '../ReportsExpenses/ReportExpenses.styled';

const ReportIncom = () => {
   const imageKeys = Object.keys(images);

  return (
     <ListImages>
      {imageKeys.map((key) => (
        <Colum key={key}>
          <p>sum</p>
          <ImageItem><img src={images[key]} alt={key} /></ImageItem>
          <ImageName>{key}</ImageName>
        </Colum>
      ))}
    </ListImages>
  );
};

export default ReportIncom;
