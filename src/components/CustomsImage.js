import React from 'react';

export const CustomsImage = ({ imgSrc, pt }) => {
  return (
    <div className="custom-image" style={{ paddingTop: pt }}>
      <img src={imgSrc} alt="" />
    </div>
  );
};
