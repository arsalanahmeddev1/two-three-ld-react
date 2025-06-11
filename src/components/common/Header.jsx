import React from 'react'
import { logo } from '../../assets/images';
import { nav } from '../../constants/data';
import { Link } from 'react-router-dom';
import { Input } from '../ui';
import { CgProfile, FaRegHeart, FiSearch } from '../icons';
import Button from '../ui/button/Button';

const Header = () => {
  return (
    <header className='header font-poppins pt-[55px] pb-[35px]'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <img src={logo} alt="logo" />
          <nav className='flex-grow-1 max-w-[640px]'>
            <ul className='flex items-center justify-between'>
              {nav.map((item) => (
                <li key={item.id}>
                  <Link to={item.path} className='text-[19px]'>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
            <Input 
            icon={FiSearch}
            iconClassName='right-[10px] top-[13px] text-[20px]'
            placeholder='Search Artist or Artworks'
            variant='headerSearch'
            className='font-poppins'
            parentClass='flex-grow-1 max-w-[300px]'
            />
            <CgProfile className='text-[30px] text-black cursor-pointer'/>
            <FaRegHeart className='text-[30px] text-black cursor-pointer'/>
            <Button variant='primary'>Join Us</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
