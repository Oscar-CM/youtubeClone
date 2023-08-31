"use client"

import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Videos from './components/Videos';
import { fetchFromAPI } from './utils/fetchFromAPI';


const Page = () => {

  const [selectedCategory, setSelectedCategory] = useState('new');
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))

  }, [selectedCategory]);

  return (
    <div >
      <div className='bg-slate-900 p-3 text-white'>
        <Navbar />
      </div>
      <div className='grid bg-black'>
        <div className=' row-start-1 col-span-1 h-screen border-r-2 border-slate-800'>
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className='row-start-1 col-span-10 h-screen text-white'>
          <div className='m-3 flex text-xl head-text'>
            <p>{selectedCategory}</p>
            <span className='text-red-400 mx-2'> <h4> Videos  </h4></span>
            <Feed />
            
          </div>
          <Videos videos={videos}/>


        </div>
      </div>
    </div>


  )
}

export default Page