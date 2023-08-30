import { Stack, Box } from "@mui/material";

import React from 'react';

import { VideoCard , ChannelCard ,Loader} from './';

const Videos = ({videos,direction}) => {

   if(videos?.lenght) return <Loader />;
  console.log("me",videos);
  return (
    <Stack direction={direction ||"row" } flexWrap="wrap" justifyContent="center" alignItems="center"
    gap={2}>
        {videos.map((item,idx)=>(
            <Box key={idx}>
            {/* to handle the case when direct videos and vedis inside channel refer */}
                {item.id.videoId && <VideoCard video={item} />}
                {/* {item.snippet.channelId&&<ChannelCard channelDetail={item} />} */}
            
                
            
            </Box>
        ))}
    </Stack>
  );
}

export default Videos
