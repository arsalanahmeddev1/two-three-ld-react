import React from 'react'
import {Title} from '../ui'
import { partnersData } from '../../constants/data'

const Index = () => {
  return (
    <section className="pb-[100px]">
      <div className="container">
        <Title title="Partners we've helped" className='mb-[20px]' />
        <div className="flex items-center justify-between">
          {partnersData.map((partner) => (
            <div key={partner.id}>
              <img src={partner.image} alt={`Partner ${partner.id}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Index 