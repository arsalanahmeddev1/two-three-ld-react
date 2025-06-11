
import React from 'react'
import Layout from '../../components/layout/Layout'
import {Header, HeroBanner, FeaturedProfile, FilterArtist, LoveArt, MarketPlace, NewsLetter, Categories, SourceArt, Partners, ContactUs} from '../../components';
const Home = () => {
  return (
    <Layout>
      <Header />
      <HeroBanner />
      <FeaturedProfile />
      <FilterArtist />
      <LoveArt />
      <MarketPlace />
      <NewsLetter/>
      <Categories/>
      <SourceArt/>  
      <Partners/>
      <ContactUs/>
    </Layout>
  )
}

export default Home
