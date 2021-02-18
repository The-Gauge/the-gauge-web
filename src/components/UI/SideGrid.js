import React from 'react';
import { Box, Button, IconButton, makeStyles, Container, Grid, Paper, Typography} from '@material-ui/core';
import './style.css';
import imageE from '../../assets/img/economy.jpg';
// import imageP from '../../assets/img/farmer.jpg';
// import imageG from '../../assets/img/vaccine.jpg';
// import imageS from '../../assets/img/science.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Mousewheel,Autoplay } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation,Mousewheel,Autoplay]);

const ArticleCard = () => {
  return(
    <Box display='flex' flexDirection='column' style={{paddingBottom:'3rem', minHeight:'32rem'}}>
      <Box bgcolor='primary.main' color='primary.contrastText' style={{ height: '3rem', width: '100%', textTransform: 'uppercase' }} className='container-row'>
        <Typography variant='h3' style={{ marginLeft: '3rem' }}>politics</Typography>
      </Box>
      <Box className='container-row'>
        <Typography variant='h2' style={{ textTransform: 'uppercase', flex: '1 1 0' }}>the protest</Typography>
        <Typography variant='h2' style={{ flex: '1 1 0' }}>3 mins read</Typography>
      </Box>

      <Box style={{ width: '100%', height:'17rem' }}>
        <img alt='article image' src={imageE} style={{ height: '17rem' }}></img>
      </Box>
      <Typography variant='h4' style={{ flex: '1 1 0', marginBottom:'1rem', }}>the farmer's protest might end by lorem ipsum but...</Typography>
    </Box>
  )
}

export const SideGrid = () =>{
    return(
      <>
      <Paper style={{
          
          position:'sticky', top:'8rem' ,
          display:'flex',
          height:'110vh',
          width:'100%'
          
         }} >
          <Swiper
            style={{margin:0, width:'100%'}}
            
            mousewheel
            direction='vertical'
            loop
            autoplay
            slidesPerView={3}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide style={{
              //borderBottom: '1px solid #641e1e'
              }}>
              <ArticleCard />
            </SwiperSlide>
            <SwiperSlide><ArticleCard /></SwiperSlide>
            <SwiperSlide><ArticleCard /></SwiperSlide>
            <SwiperSlide><ArticleCard /></SwiperSlide>
    
    </Swiper>
           
            
      </Paper>
     
      </>
    )
}


{/* <a><h7 className="head">POLITICS</h7></a>
             <Box className="para"><p>THE PROTEST</p> <p>2 mins read</p></Box>
             <img src={imageP} alt="politics" className="image"></img>
             <p>The farmers protest is expected to end by...</p>
            </Grid>
            <Grid item xs={12} className="grids">
            <a><h7 className="head">ECONOMY</h7></a>
            <Box className="para"><p>SHAREHOLDER CAPITALISM</p> <p>3 mins </p></Box>
              <img src={imageE} alt="economy" className="image"></img>
             <p>The farmers protest is expected to end by...</p>
            </Grid>
            <Grid item xs={12} className="grids">
            <a><h7 className="head">GLOBAL</h7></a>
            <Box className="para"><p>WHO on vaccine</p> <p>2 mins read</p></Box>
            <img src={imageG} alt="global" className="image"></img>
             <p>Astra Zenca vaccine developed by Oxford...</p>
            </Grid>
            <Grid item xs={12} className="grids">
            <a><h7 className="head">CULTURE</h7></a>
            <Box className="para"><p>BHODO TRIBE</p> <p>2 mins read</p></Box>
            <img src={imageS} alt="culture" className="image"></img>
            <p>Astra Zenca vaccine developed by Oxford...</p>
            </Grid>
            <Grid item xs={12} className="grids">
            <a><h7 className="head">SCIENCE & TECH</h7></a>
            <Box className="para"><p>BHODO TRIBE</p> <p>2 mins read</p></Box>
            <img src={imageS} alt="science&tech" className="image"></img>
            <p>Astra Zenca vaccine developed by Oxford...</p>
            </Grid> */}