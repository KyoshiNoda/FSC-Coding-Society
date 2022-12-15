import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import NewsItem from '../components/News/NewsItem';
function News() {
  let lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident eligendi natus fugit reiciendis necessitatibus corporis voluptatum iusto repellat,
              est ipsa praesentium beatae obcaecati quisquam quasi, iure recusandae temporibus! Veritatis, ducimus?`;
  return (
    <div>
      <Navbar/>
      <div className='flex flex-wrap gap-8 m-11 justify-center'>
        <NewsItem title = "News Title #1" text = {lorem}/>
        <NewsItem title = "News Title #2" text = {lorem}/>
        <NewsItem title = "News Title #3" text = {lorem}/>
        <NewsItem title = "News Title #4" text = {lorem}/>
        <NewsItem title = "News Title #5" text = {lorem}/>
      </div>
    </div>
  )
}

export default News