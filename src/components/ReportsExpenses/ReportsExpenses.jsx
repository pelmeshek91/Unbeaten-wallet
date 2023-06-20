import React from 'react';
import * as images from 'components/ReportsExpenses/image';
import { ImageItem, ListImages, ImageName, Colum } from './ReportExpenses.styled';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


const ReportsExpenses = () => {
   const imageKeys = Object.keys(images);

  return (<>
  <button>
          <MdKeyboardArrowLeft
            size="26"
            color="green"
          />
      </button>
      <h2>EXPENSES</h2>
      <button >
          <MdKeyboardArrowRight size="26" color="green" />
        </button>
     <ListImages>
      {imageKeys.map((key) => (
        <Colum key={key}>
          <p>sum</p>
          <ImageItem>
            <img src={images[key]} alt={key} />
          </ImageItem>
          <ImageName>{key}</ImageName>
          </Colum>        
      ))}
    </ListImages>
     </>
  );
};

export default ReportsExpenses;
