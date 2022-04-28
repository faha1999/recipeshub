import React from 'react';
import { CustomsImage } from './CustomsImage';
import heroImages from './data/heroImages';

export const Hero = () => {
  const images = heroImages.map((src, index) => (
    <CustomsImage key={index} imgSrc={src} pt={'90%'} />
  ));

  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">What Are We About</h1>
        <p className="info">
          FoodiesHub is a place where you can please your soul and tummy with
          delicious food recepies of all cuisine. And our service is absolutely
          free. So start exploring now.
        </p>
        <button className="btn">explore now</button>
      </div>
      <div className="col gallery">{images}</div>
    </div>
  );
};
