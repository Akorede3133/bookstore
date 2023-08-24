import React from 'react';
import { Link } from 'react-router-dom';

import { FaUserAlt } from 'react-icons/fa';

const Header = () => (
  <header className=" font-montserrat flex justify-between items-center shadow-md p-6 border-b border-b-gray-200">
    <div className=" flex items-center gap-4">
      <h1>
        <Link to="/" className=" text-[rgb(2,144,255)] text-3xl font-extrabold font-montserrat pr-5">
          Bookstore CMS
        </Link>
      </h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="uppercase text-sm">
              Books
            </Link>
          </li>
          <li>
            <Link to="/categories" className=" uppercase opacity-50 text-sm">
              Categories
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <FaUserAlt style={{ color: '#0290ff' }} />
  </header>
);

export default Header;
