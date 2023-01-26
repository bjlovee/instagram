import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from "@mui/joy/Link";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import SmsIcon from '@mui/icons-material/Sms';
import {SlPaperPlane} from "react-icons/sl"
import {TbMessageCircle2} from "react-icons/tb"
import {AiOutlineHeart} from "react-icons/ai"
import {FaRegBookmark} from "react-icons/fa"


export default function ContainerResponsive() {
  return (
    <Box sx={{ minHeight: 350 }}>
      <Card
        variant="outlined"
        sx={(theme) => ({
          width: 300,
          gridColumn: 'span 2',
          flexDirection: 'row',
          flexWrap: 'wrap',
          resize: 'horizontal',
          overflow: 'hidden',
          gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
          transition: 'transform 0.3s, border 0.3s',
          '&:hover': {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
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
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 200,
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <div>
              <Typography level="h2" sx={{ fontSize: 'md' }} mb={0.5}>
                <Link
                  href="#container-responsive"
                  overlay
                  underline="none"
                  sx={{
                    color: 'text.primary',
                    '&.Mui-focusVisible:after': { outlineOffset: '-4px' },
                  }}
                >
                   <Avatar variant="soft" color="neutral">
            <img width="40px"
            src="https://media.licdn.com/dms/image/C5603AQFTBEZIH7qH0g/profile-displayphoto-shrink_200_200/0/1657882772501?e=1680134400&v=beta&t=Afh8i2xzFQdIf_NLGuFXg5xefMZxHIQuVLaEGr-KveA"
            loading="lazy"
            alt=""
          />
            </Avatar>
            &nbsp; BJ Love &nbsp; 
          
                </Link>
              </Typography>
              <Typography level="body2">California, USA</Typography>
            </div>
    
          </Box>
          <AspectRatio
            variant="soft"
            sx={{
              '--AspectRatio-paddingBottom':
                'clamp(0px, (100% - 200px) * 999, 200px)',
              pointerEvents: 'none',
            }}
          >
            <img
              alt=""
              src="https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&w=2262"
            />
          </AspectRatio>
          <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
            
            <div>
            <AiOutlineHeart size="30px" color="#ff1744" />&nbsp;
              <SlPaperPlane size="30px"/>&nbsp;
              <TbMessageCircle2  size="30px"/>&nbsp;
              <FaRegBookmark  size="30px"/>
              <br />
              <Typography level="body2">Designed by</Typography>
              <Typography fontWeight="lg" level="body2">
                Nature itself
              </Typography>
              <br/>
            </div>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
