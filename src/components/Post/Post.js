import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import { Typography } from '@mui/material';
import Link from "@mui/joy/Link";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import SmsIcon from '@mui/icons-material/Sms';
import {SlPaperPlane} from "react-icons/sl"
import {TbMessageCircle2} from "react-icons/tb"
import {AiOutlineHeart} from "react-icons/ai"
import {FaRegBookmark} from "react-icons/fa"
import "../Post/Post.css"
import { borderBottomColor } from '@mui/system';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import Avatar from "@mui/material/Avatar";

export default function ContainerResponsive({
  post

}) {
// console.log(allPosts[0].image)
  return (
    <div className='box'>
    <Box sx={{ minHeight: 350 }} className='box-container'>
      <Card
        variant="outlined"
        sx={(theme) => ({
          width: 300,
          gridColumn: 'span 2',
          flexDirection: 'row',
          flexWrap: 'wrap',
          // resize: 'horizontal',
          overflow: 'hidden',
          gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
          transition: 'transform 0.3s, border 0.3s',
          border: "none",
          '&:hover': {
            borderColor:  '#e0e0e0'.outlinedHoverBorder,
            transform: 'translateY(-2px)',
          },
          '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
        })}
      >
        <AspectRatio
          variant="soft"
          sx={{
            flexGrow: 1,
            display: 'contents',
            '--AspectRatio-paddingBottom':
              'clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&w=2000"
            // src={allPosts[0].image}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 300,
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <div>
              <Typography level="h2" sx={{ fontSize: 'md' }} mb={0.5}>
                <Link
                  overlay
                  underline="none"
                  sx={{
                    color: 'text.primary',
                    '&.Mui-focusVisible:after': { outlineOffset: '-4px' },
                  }}
                >                   
                <Avatar variant="soft" color="neutral">
                  {post.posterPic
                    ?
                      <img width="40px"
                      // src="https://media.licdn.com/dms/image/C5603AQFTBEZIH7qH0g/profile-displayphoto-shrink_200_200/0/1657882772501?e=1680134400&v=beta&t=Afh8i2xzFQdIf_NLGuFXg5xefMZxHIQuVLaEGr-KveA"
                      src={post.posterPic}
                      loading="lazy"
                      alt=""
                    />
                    :
                    <Avatar sx={{width: '100%', height: '100%'}}/>
                  }

            </Avatar>
            &nbsp;{post.posterName} &nbsp; 
              <div className='button'> 


              </div> 
              <MoreHorizIcon />
                </Link>
              </Typography>
              {/* <Typography level="body2">California, USA</Typography> */}
            </div>
    
          </Box>
          <AspectRatio className='image-container'

            variant="soft"
            sx={{
              '--AspectRatio-paddingBottom':
                'clamp(0px, (100% - 200px) * 999, 200px)',
              pointerEvents: 'none',
              // height: "8rem"
            }}
          >
            <img
              alt=""
              src={post.image}
              // style={{ height:"40rem"}}
            />
          </AspectRatio>

          <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
            
            <div>
            <AiOutlineHeart size="1.5rem" color="#ff1744" />&nbsp;&nbsp;&nbsp;
              <SlPaperPlane size="1.5rem"/>&nbsp;&nbsp;&nbsp;
              <TbMessageCircle2  size="1.5rem"/>&nbsp;
              <div className='icons'>
              <FaRegBookmark  size="1.5rem"/>
              </div>
              <br />
              <Typography sx={{ fontSize:'.7rem', paddingTop:"0.7rem" }} level="body2"><b>{post.likes.length}</b> Like{post.likes.length === 1 ? '' : 's'} and, <b>{post.comments.length}</b> Comment{post.comments.length === 1 ? '' : 's'} </Typography>
              <Typography fontWeight="lg" level="body2">
               
              </Typography>
              <br/>
            </div>
          </Box>
        </Box>
      </Card>
    </Box>
    </div>
  );
}
