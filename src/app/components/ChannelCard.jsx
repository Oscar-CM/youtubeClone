import React from 'react';
import Link from 'next/link';

import { demoChannelUrl, demoProfilePicture } from '../utils/constants';

const ChannelCard = ({  channelDetail }) => {


  return (
    <div className=" rounded-lg shadow-md p-4 mb-4 justify-centerm mx-11">
      <Link href={`/channel/${channelDetail?.id?.channelId}`}>
      
      <img
        src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={channelDetail?.snippet?.thumbnails}
        height={180}
        width={180}
        className=" mb-2 rounded"
      />
      </Link>
      <h2 className="text-lg font-semibold">{channelDetail?.snippet?.title?.slice(0, 60)}</h2>
      
    </div>
  )
}

export default ChannelCard