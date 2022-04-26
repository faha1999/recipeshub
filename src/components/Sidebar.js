import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = ({ links, close }) => {
  const location = useLocation();

  return (
    <div className="sidebar" onClick={close}>
      {links.map((link) => (
        <Link
          className={
            location.pathname === link.path
              ? 'sidebar-link active'
              : 'sidebar-link'
          }
          to={link.path}
          key={link.name}
        >
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </Link>
      ))}
    </div>
  );
};
