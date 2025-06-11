import React from 'react'
import {Title} from '../ui'
import Button from '../ui/button/Button';
import { IoCall,IoIosMail } from '../icons';
import { contactUsData } from '../../constants/data'

const Index = () => {
  return (
    <section className="contact-us-sec pb-[100px]">
      <div className="container">
        <div className="grid grid-cols-2">
          <div>
            <Title className='font-cinzel text-start font-normal mb-[20px]' title="Connect with us" />
            {contactUsData.map((contact) => (
              <div key={contact.id} className='flex items-center gap-[20px] mb-[20px]'>
                <div>
                  <img src={contact.image} alt="" />
                </div>
                <div>
                  <Title className=' text-start font-medium' Tag='h5' size='text-[25px]' title={contact.name} />
                  <div className='flex flex-col'>
                    <div className='flex items-center gap-[10px]'>
                      <IoCall/>
                      <Button className='text-[24px] !p-0 text-black font-poppins' variant='custom' to={`tel:${contact.phone}`}>{contact.phone}</Button>
                    </div>
                    <div className='flex items-center gap-[10px]'>
                      <IoIosMail/>
                      <Button className='text-[24px] !p-0 text-black font-poppins' variant='custom' to={`mailto:${contact.email}`}>{contact.email}</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            {/* Add other content here later */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index 