"use client"
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchFromAPI } from '@/app/utils/fetchFromAPI';

import { Params } from 'react-router-dom';
import Navbar from '@/app/components/Navbar';
import ChannelCard from '@/app/components/ChannelCard';
import Videos from '@/app/components/Videos';

const Channel = () => {

    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([])



    const { id } = useParams()

    useEffect(() => {
        fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));


    }, [id]);



    return (

        <div>
           
            <div className='bg-black'>
                <div className='gradient w-full h-[30vh]'>

                </div>

                <div className='shift flex justify-center relative mt-[-8] rounded-3xl'>
                    <div>
                        <ChannelCard channelDetail={channelDetail} />

                    </div>
                    <div>
                        <h1 className='text-white block mt-3'> {channelDetail?.snippet?.title}</h1>
                        <h1 className='text-white block mt-3'> {channelDetail?.statistics?.viewCount} Views</h1>
                        <h1 className='text-white block mt-3'> {channelDetail?.statistics?.subscriberCount} Subscibers</h1>
                    </div>


                </div>
                <div className='grid grid-cols-1 m-3'>
                    <div>
                        <Videos videos={videos} />
                    </div>

                </div>

            </div>




        </div>



    )
}

export default Channel