"use client"

import React from 'react'
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';
import Link from 'next/link';

const Videos = ({videos}) => {
  return (
    <div className=' grid sm:grid-cols-1 md:grid-cols-4'>
        {videos && videos.map((item, idx) => (
            <div key={idx}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </div>
        ))}


    </div>
  )
}

export default Videos