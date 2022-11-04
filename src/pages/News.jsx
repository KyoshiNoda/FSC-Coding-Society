import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import NewsItem from '../components/News/NewsItem';
function News() {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-wrap gap-8 m-11 '>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </div>
    </div>
  )
}

export default News