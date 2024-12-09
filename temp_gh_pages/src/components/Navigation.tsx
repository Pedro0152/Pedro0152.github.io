import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-8 py-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-600 hover:text-gray-900 ${isActive ? 'font-semibold' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catering"
            className={({ isActive }) =>
              `text-gray-600 hover:text-gray-900 ${isActive ? 'font-semibold' : ''}`
            }
          >
            Catering
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-600 hover:text-gray-900 ${isActive ? 'font-semibold' : ''}`
            }
          >
            About Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};