import React from 'react'
import { Link } from 'react-router-dom'

import { FaUserAlt } from 'react-icons/fa';
const Header = () => {
  return (
    <header className=' flex justify-between'>
     <div className=' flex gap-2'>
      <h1>
        <Link to="/">
          Bookstore CMS
        </Link>
      </h1>
      <nav>
        <ul className='flex gap-2'>
          <li>
            <Link to="/">
              Books
            </Link>
          </li>
          <li>
            <Link to="/categories">
              Categories
            </Link>
          </li>
        </ul>
      </nav>
     </div>
     <FaUserAlt style={{color: '#0290ff' }} />
    </header>
  )
}

export default Header