import React from 'react'
import { Title, Para } from '../ui'
import Button from '../ui/button/Button'
import { categoriesData } from '../../constants/data'

const Index = () => {
  return (
    <section className='categories-sec pb-[60px]'>
      <div className="container">
        <Title className='max-w-[990px] mx-auto leading-[1.2]' title='We provide a specialized service to these categories' />
        <div className="grid gap-x-[15px] gap-y-[40px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 place-items-center">
          {categoriesData.map((category) => (
            <div className="categories-card mx-auto" key={category.id}>
              <img src={category.image} alt={category.title} className='mb-[20px]' />
              <Title className='text-start font-bold text-black' Tag='h3' size='text-[24px]' title={category.title}/>
              <Para className='mb-[10px]' title={category.subtitle}/>
              <Button  variant='custom' className='font-poppins border border-[#707070] text-[#949494] px-[44px] py-[10px]'>View More</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Index 