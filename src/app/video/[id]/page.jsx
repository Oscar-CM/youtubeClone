"use client"
import React from 'react';
import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';
import Videos from '@/app/components/Videos';
import Navbar from '@/app/components/Navbar';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { fetchFromAPI } from '@/app/utils/fetchFromAPI';

const ViewVideo = () => {
    const [videoDetail, setVideoDetail] = useState(null)
    const [videos, setVideos] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]));

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=videos`).then((data)=>setVideos(data.items));

    }, [id]);


    return (
        <div className='bg-black'>
            <div className='bg-slate-900 p-3 text-white'>
                <Navbar />
            </div>
            <div className='p-3'>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player w-auto h-auto" controls />
            </div>
            <div className='text-white p-3'>
                <div className=' '>
                    {videoDetail?.snippet?.title}
                    {videoDetail?.snippet?.channelTitle}
                </div>
                <div className='mt-2'>
                    <p>{videoDetail?.statistics?.viewCount} <span className='text-red-400'>Views</span></p>
                    <p>{videoDetail?.statistics?.likeCount} <span className='text-red-400'>Likes</span></p>

                </div>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-white bg-red-600 p-2 rounded-2xl items-end mx-5'> Related Videos </h1>
                <Videos videos={videos}/>
            </div>

        </div>
    );
}

export default ViewVideo