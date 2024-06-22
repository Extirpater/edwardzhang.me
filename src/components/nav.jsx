// src/components/Nav.jsx
import React from 'react';
import '../index.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            exact
            to="/"
            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900"
            activeClassName="bg-gray-900"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/test/id1"
            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900"
            activeClassName="bg-gray-900"
          >
            Test id1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/test/id2"
            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900"
            activeClassName="bg-gray-900"
          >
            Test id2
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
