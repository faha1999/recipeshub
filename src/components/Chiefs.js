import React from 'react';
import { ChiefsCard } from './ChiefsCard';
import chiefsData from './data/chiefsData';

export const Chiefs = () => {
  const chiefsItem = chiefsData.map((chiefsItem) => (
    <ChiefsCard key={chiefsItem.name} chiefsItem={chiefsItem} />
  ));

  return (
    <div className="section chiefs">
      <h1 className="title">Our Top Chiefs</h1>
      <div className="top-chiefs-container">{chiefsItem}</div>
    </div>
  );
};
