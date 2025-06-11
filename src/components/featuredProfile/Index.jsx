import React from 'react'
import {Title} from '../ui';
import featuredImg01 from '../../assets/images/featured-img-01.png';
import featuredImg02 from '../../assets/images/featured-img-02.png';
import featuredImg03 from '../../assets/images/featured-img-03.png';
import featuredImg04 from '../../assets/images/featured-img-04.png';
import featuredImg05 from '../../assets/images/featured-img-05.png';
import featuredImg06 from '../../assets/images/featured-img-06.png';
const Index = () => {
  return (
    <section className='featured-profile-sec py-[124px]'>
      <div className="container">
        <Title title='Featured Artist pROFILES' className='mb-[80px]' />
        <div className="grid grid-cols-2 gap-y-[10px]">
          <div>
            <div className="artist-card relative">
              <img src={featuredImg01} alt="" />
              <h4 className='font-bold text-[30px] text-white absolute bottom-[40px] left-[40px] w-full'>Devin Pughsley</h4>
            </div>
          </div>
          <div>
            <div className="artist-card relative mb-[10px]">
              <img src={featuredImg03} alt="" />
              <h4 className='font-bold text-[30px] text-white absolute bottom-[40px] left-[40px] w-full'>Luke Joshu</h4>
            </div>
            <div className="artist-card relative">
              <img src={featuredImg04} alt="" />
              <h4 className='font-bold text-[30px] text-white absolute bottom-[40px] left-[40px] w-full'>Jim Tidwell</h4>
            </div>
          </div>
          <div>
            <div className="artist-card relative">
              <img src={featuredImg02} alt="" />
              <h4 className='font-bold text-[30px] text-white absolute bottom-[40px] left-[40px] w-full'>Robbie Lasky</h4>
            </div>
          </div>
          <div className='flex gap-x-[10px]'>
            <div className="artist-card relative">
              <img src={featuredImg05} alt="" />
              <h4 className='font-bold text-[30px] text-white absolute bottom-[40px] left-[40px] w-full'>Luke Joshua</h4>
            </div>
            <div className="artist-card relative">
              <img src={featuredImg06} alt="" />
              <h4 className='font-bold text-[30px] text-white absolute bottom-[40px] left-[40px] w-full'>Emily Brown</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
