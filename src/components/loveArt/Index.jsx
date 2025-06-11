import React from 'react'
import { Title, Para } from '../ui'
import { loveArtData } from '../../constants/data';
import Button from '../ui/button/Button';
const Index = () => {
  return (
    <section className='love-art-sec pb-[40px]'>
      <div className="container">
        <Title className='mx-auto max-w-[1020px] mb-[20px] leading-[1.2]' title='Love Art? Connect with an artist and their work' />
        <Para className="text-black text-[20px] mb-[30px] max-w-[540px] mx-auto text-center" title="Each 23LD artist is unique in their own way just like art. Learn their story and their life's work" />
        <div className="grid grid-cols-2 gap-y-[30px]">
          {loveArtData.map((artist, index) => (
            <div key={index}>
              <div className="love-art-card">
                <div className="flex gap-[5px] mb-[10px]">
                  <div>
                    <img src={artist.largeImage} alt="" />
                  </div>
                  <div className='flex flex-col gap-y-[8px]'>
                    {artist.smallImages.map((img, i) => (
                      <img key={i} src={img} alt="" />
                    ))}
                  </div>
                </div>
                <Title className="text-start" title={artist.title} />
                <Para className="text-start mb-[10px]" title={artist.subtitle} />
                <Button className='' variant='secondary' size='sm'>View Profile</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto flex justify-center mt-[45px]">
        <Button  variant='custom' className='bg-black text-white font-poppins py-[10px] px-[50px]' >View All Artists</Button>
        </div>
      </div>
    </section>
  )
}

export default Index
