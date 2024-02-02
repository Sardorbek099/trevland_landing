import React from 'react'
import Header from '../../sections/header/header'
import PopularLocation from '../../sections/popular_location/popular_loaction'
import Offers from '../../sections/offers/offers'
import Blog from '../../sections/blog/blog'
import Footer from '../../sections/footer/footer'

export default function Home() {
  return (
    <div>
      <Header/>
      <PopularLocation/>
      <Offers/>
      <Blog/>
      <Footer/>
    </div>
  )
}
