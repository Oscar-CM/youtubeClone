"use client"

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Navbar from '@/app/components/Navbar';

import Videos from '@/app/components/Videos';
import { fetchFromAPI } from '@/app/utils/fetchFromAPI';


const Search = () => {

  const [videos, setVideos] = useState([])

  const { searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))

  }, [searchTerm]);

  return (
    <div >
      
      <div className=' bg-black '>
      <h1 className='text-white p-3 mx-4 text-xl'> Displaying videos for the search term  </h1><span className='text-red-700'> {searchTerm}</span>
      </div>
      <div className='grid bg-black'>
        <h1 className='bg-white'> Haloo</h1>
        <div>
        
        </div>
        

        <div className='row-start-1 col-span-10 h-screen text-white'>
         
          <Videos videos={videos}/>


        </div>
      </div>
    </div>


  )
}

export default Search