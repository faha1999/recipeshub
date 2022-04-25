import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export const ChiefsCard = ({ chiefsItem }) => {
  return (
    <div className="chief-card">
      <img src={chiefsItem.img} alt="" />
      <div className="chief-card-info">
        <h3 className="chief-card-name">{chiefsItem.name}</h3>
        <p className="chief-recipe-count">
          Recipes: <b>{chiefsItem.recipesCount}</b>
        </p>
        <p className="chief-cuisine">
          Cuisine: <b>{chiefsItem.cuisine}</b>
        </p>
        <p className="chief-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </p>
      </div>
    </div>
  );
};
