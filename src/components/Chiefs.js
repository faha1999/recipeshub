import React from 'react';
import { ChiefsCard } from './ChiefsCard';

export const Chiefs = () => {
  const chiefsItem = [
    {
      name: 'Juan Carlos',
      img: '../images/top-chiefs/img_1.jpg',
      recipesCount: '10',
      cuisine: 'Mexican',
    },
    {
      name: 'John Doe',
      img: '../images/top-chiefs/img_2.jpg',
      recipesCount: '05',
      cuisine: 'Japanese',
    },
    {
      name: 'Erich Maria',
      img: '../images/top-chiefs/img_3.jpg',
      recipesCount: '13',
      cuisine: 'Italian',
    },
    {
      name: 'Chris Brown',
      img: '../images/top-chiefs/img_4.jpg',
      recipesCount: '08',
      cuisine: 'American',
    },
    {
      name: 'Blake Lively',
      img: '../images/top-chiefs/img_5.jpg',
      recipesCount: '09',
      cuisine: 'French',
    },
    {
      name: 'Ben Affleck',
      img: '../images/top-chiefs/img_6.jpg',
      recipesCount: '04',
      cuisine: 'Indian',
    },
  ];

  return (
    <div className="section chiefs">
      <h1 className="title">Our Top Chiefs</h1>
      <div className="top-chiefs-container">
        {chiefsItem.map((chiefsItem) => (
          <ChiefsCard key={chiefsItem.name} chiefsItem={chiefsItem} />
        ))}
      </div>
    </div>
  );
};
