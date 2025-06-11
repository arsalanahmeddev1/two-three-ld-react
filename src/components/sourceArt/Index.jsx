import React from 'react'
import { Title, Para } from '../ui'
import { sourceArtData } from '../../constants/data'

const Index = () => {
  return (
    <section className="sourceart-sec py-[70px] bg-black mb-[100px]">
      <div className="container">
        <Title className='text-white mb-[30px]' title="Source Art For Your Business" />
        <div className="flex gap-[30px]">
          {sourceArtData.map((item) => (
            <div className="source-art-card flex gap-[20px]">
              <div key={item.id} className='flex items-center gap-[20px]' >
                <div className='w-full max-w-[80px]'>
                  <img src={item.numberImage} alt={item.title} />
                </div>
                <div>
                  <div className='flex gap-[10px]'>
                    <div>
                      <img src={item.icon} alt="" />
                    </div>
                    <Title className='text-white mb-[10px] text-start' Tag='h5' size='text-[25px]' title={item.title} />
                  </div>
                  <Para className='text-white' title={item.description} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Index 