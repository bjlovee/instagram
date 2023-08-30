import * as React from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Avatar from '@mui/joy/Avatar'
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import { Typography } from '@mui/material'
import Link from '@mui/joy/Link'
import { SlPaperPlane } from 'react-icons/sl'
import { TbMessageCircle2 } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegBookmark } from 'react-icons/fa'
import '../Post/Post.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

export default function ContainerResponsive ({
  post
}) {
  return (
    <div className='box'>
      <Box sx={{ minHeight: 350 }} className='box-container'>
        <Card
          variant='outlined'
          sx={(theme) => ({
            width: 300,
            gridColumn: 'span 2',
            flexDirection: 'row',
            flexWrap: 'wrap',
            overflow: 'hidden',
            gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
            transition: 'transform 0.3s, border 0.3s',
            border: 'none',
            '&:hover': {
              borderColor: '#e0e0e0'.outlinedHoverBorder,
              transform: 'translateY(-2px)'
            },
            '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' }
          })}
        >
          <AspectRatio
            variant='soft'
            sx={{
              flexGrow: 1,
              display: 'contents',
              '--AspectRatio-paddingBottom':
              'clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))'
            }}
          >
            <img
              src='https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&w=2000'
              loading='lazy'
              alt=''
            />
          </AspectRatio>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              maxWidth: 300
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <div>
                <Typography level='h2' sx={{ fontSize: 'md' }} mb={0.5}>
                  <Link
                    overlay
                    underline='none'
                    sx={{
                      color: 'text.primary',
                      '&.Mui-focusVisible:after': { outlineOffset: '-4px' }
                    }}
                  >
                    <Avatar variant='soft' color='neutral'>
                      {post.posterPic
                        ? <img
                          width='40px'
                          src={post.posterPic}
                          loading='lazy'
                          alt=''
                        />
                        : <Avatar sx={{ width: '100%', height: '100%' }} />}

                    </Avatar>
                    {post.posterName} &nbsp;
                    <div className='button' />
                    <MoreHorizIcon />
                  </Link>
                </Typography>
              </div>

            </Box>
            <AspectRatio
              className='image-container'

              variant='soft'
              sx={{
                '--AspectRatio-paddingBottom':
                'clamp(0px, (100% - 200px) * 999, 200px)',
                pointerEvents: 'none'
              }}
            >
              <img
                alt=''
                src={post.image}
              />
            </AspectRatio>

            <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>

              <div>
                <AiOutlineHeart size='1.5rem' color='#ff1744' />&nbsp;&nbsp;&nbsp;
                <SlPaperPlane size='1.5rem' />&nbsp;&nbsp;&nbsp;
                <TbMessageCircle2 size='1.5rem' />&nbsp;
                <div className='icons'>
                  <FaRegBookmark size='1.5rem' />
                </div>
                <br />
                <Typography sx={{ fontSize: '.7rem', paddingTop: '0.7rem' }} level='body2'><b>{post.likes.length}</b> Like{post.likes.length === 1 ? '' : 's'} and, <b>{post.comments.length}</b> Comment{post.comments.length === 1 ? '' : 's'} </Typography>
                <Typography fontWeight='lg' level='body2' />
                <br />
              </div>
            </Box>
          </Box>
        </Card>
      </Box>
    </div>
  )
}
