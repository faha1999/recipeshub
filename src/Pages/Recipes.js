import React from 'react';
import { PrevSearches } from '../components/PrevSearches';
import RecipeCard from '../components/RecipeCard';

export const Recipes = () => {
  const recipes = [
    {
      title: 'Chicken Pan Pizza',
      image: '../images/gallery/img_1.jpg',
      authorImg: '../images/top-chiefs/img_1.jpg',
    },
    {
      title: 'Spaghetti and Meatballs',
      image: '../images/gallery/img_4.jpg',
      authorImg: '../images/top-chiefs/img_2.jpg',
    },
    {
      title: 'American Cheese Burger',
      image: '../images/gallery/img_5.jpg',
      authorImg: '../images/top-chiefs/img_3.jpg',
    },
    {
      title: 'Mutton Biryani',
      image: '../images/gallery/img_6.jpg',
      authorImg: '../images/top-chiefs/img_5.jpg',
    },
    {
      title: 'Japanese Sushi',
      image: '../images/gallery/img_10.jpg',
      authorImg: '../images/top-chiefs/img_6.jpg',
    },
    {
      title: 'Chicken Pan Pizza',
      image: '../images/gallery/img_1.jpg',
      authorImg: '../images/top-chiefs/img_1.jpg',
    },
    {
      title: 'Spaghetti and Meatballs',
      image: '../images/gallery/img_4.jpg',
      authorImg: '../images/top-chiefs/img_2.jpg',
    },
    {
      title: 'American Cheese Burger',
      image: '../images/gallery/img_5.jpg',
      authorImg: '../images/top-chiefs/img_3.jpg',
    },
    {
      title: 'Mutton Biryani',
      image: '../images/gallery/img_6.jpg',
      authorImg: '../images/top-chiefs/img_5.jpg',
    },
    {
      title: 'Japanese Sushi',
      image: '../images/gallery/img_10.jpg',
      authorImg: '../images/top-chiefs/img_6.jpg',
    },
    {
      title: 'American Cheese Burger',
      image: '../images/gallery/img_5.jpg',
      authorImg: '../images/top-chiefs/img_3.jpg',
    },
    {
      title: 'Mutton Biryani',
      image: '../images/gallery/img_6.jpg',
      authorImg: '../images/top-chiefs/img_5.jpg',
    },
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <PrevSearches />
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};
