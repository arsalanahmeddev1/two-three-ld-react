import React from 'react'
import { logo } from '../../assets/images';
import { nav } from '../../constants/data';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='container'>
      <div className='flex items-center justify-between'>
        <img src={logo} alt="logo" />
        <nav className='flex-grow-1 max-w-[500px]'>
          <ul className='flex items-center justify-between'>
          {nav.map((item) => (
            <li key={item.id}>

            <Link  to={item.path}>{item.title}</Link>
            </li>
          ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
