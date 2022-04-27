import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [primaryColor, setPrimaryColor] = useState(0);
  const [fontSize, setFontSize] = useState(1);

  const primaryColors = [
    'rgb(255, 0, 86)',
    'rgb(33, 150, 243)',
    'rgb(255, 193, 7)',
    'rgb(0, 200, 83)',
    'rgb(156, 39, 176)',
  ];

  const fontSizes = [
    {
      title: 'Small',
      value: '12px',
    },
    {
      title: 'Medium',
      value: '16px',
    },
    {
      title: 'Large',
      value: '20px',
    },
  ];

  return (
    <div>
      {/* Preferred Theme */}
      <div className="section d-block">
        <h2>Preferred Theme</h2>
        <div className="options-container">
          <div className="option light">
            {theme === 'light' && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="option dark">
            {theme === 'dark' && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Preferred color */}
      <div className="section d-block">
        <h2>Preferred color</h2>
        <div className="options-container">
          {primaryColors.map((color, index) => (
            <div className="option light" style={{ backgroundColor: color }}>
              {primaryColor === index && (
                <div className="check">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Font size */}
      <div className="section d-block">
        <h2>Font size</h2>
        <div className="options-container">
          {fontSizes.map((size, index) => (
            <button key={index} className="btn">
              {size.title}
              {fontSize === index && (
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
