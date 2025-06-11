import React from 'react'
import { Title, Para, Input } from '../ui/'
import Button from '../ui/button/Button'

const Index = () => {
  return (
    <section className="newsletter-sec pb-[40px]">
      <div className="container">
        <div className="newsletter-card py-[62px] rounded-[60px]">
          <Title title="Subscribe Our Newsletter" />
          <Para className="text-center text-[25px] max-w-[863px] mx-auto mb-[30px]" title="Be the first to see new collections, get exclusive behind-the-scenes content, and receive special offers just for art lovers." />
          <form action="">
            <div className="relative max-w-[830px] mx-auto">
              <Input
              type='email'
                iconClassName='right-[10px] top-[13px] text-[20px]'
                placeholder='Email'
                variant='bgWhite'
                className='font-poppins border border-[#707070] border-r-0 '
                parentClass='flex-grow-1'
              />
              <Button variant='custom' className='absolute right-0 top-0 text-[20px] bg-black text-white font-poppins py-[18px] px-[30px]'>Subscribe</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Index 