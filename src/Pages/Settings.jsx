import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const Settings = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div>
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
    </div>
  );
};
