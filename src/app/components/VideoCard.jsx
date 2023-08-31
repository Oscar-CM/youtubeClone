import React from 'react';
import Link from 'next/link';

import {
    demoChannelTitle, demoProfilePicture, demoThumbnailUrl,
    demoVideoUrl, demoVideoTitle, demoChannelUrl
} from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    if(!snippet) return 'Loading...'
    return (
        <div>
            <div className=" rounded-lg shadow-md p-2 m-2 items-stretch">
                <Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <img
                        src={snippet?.thumbnails?.medium?.url || demoThumbnailUrl}
                        alt={snippet.title}
                        className="w-full h-auto mb-2 rounded"
                        width={358}
                        height={180}
                    />
                </Link>
                <h2 className="text-lg font-semibold">{snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</h2>
                <p className="text-gray-600">{snippet.channelTitle}</p>

            </div>
        </div>
    )
}

export default VideoCard