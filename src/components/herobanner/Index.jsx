import React from 'react'
import {heroBanner} from '../../constants/data';
const Index = () => {
  return (
    <div className='hero-banner'>
      <div className="container">
        <div className="hero-banner-content text-center">
          <h1 className='text-[100px] text-white max-w-[990px] mx-auto'>{heroBanner.title}</h1>
          <p className='text-[28px] font-poppins text-white'>{heroBanner.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Index
