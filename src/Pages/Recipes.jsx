import React from 'react';
import { PrevSearches } from '../components/PrevSearches';
import RecipeCard from '../components/RecipeCard';
import recipesData from '../components/data/recipesData';

export const Recipes = () => {
  const recipes = recipesData.map((recipe, index) => (
    <RecipeCard key={index} recipe={recipe} />
  ));

  return (
    <div>
      <PrevSearches />
      <div className="recipes-container">{recipes}</div>
    </div>
  );
};
