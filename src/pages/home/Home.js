import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Header } from '../../components/header/Header';
import Footer from  '../../components/Footer/Footer';
import { Box, Grid, Typography } from '@material-ui/core';
import image from '../../assets/img/sampleArticle.png'
import recommend from '../../assets/img/recommend.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Autoplay, Navigation]);

const Banner = () => {
  return(
    <Box className='container-column' style={{ width: '100%' }}>
      <Box style={{ width: '90%', justifyContent: 'center', marginBottom: '1rem' }}>
        <img src={image} style={{ width: '100%' }}></img>
      </Box>
      <Box className='container-row' style={{ width: '90%', marginBottom: '1rem', fontSize: '3rem' }}>
        <Typography variant='h3' style={{ flex: '1 1 0', fontSize: '3rem' }} >PRESIDENT BIdEN</Typography>
        <Typography variant='h3' style={{ flex: '1 1 0', fontSize: '3rem' }}>2 min read</Typography>
      </Box>
      <Box className='container-row' style={{ width: '90%', }}>
        <Typography variant='h2'> Joe Biden elected as president of the United States yesterday, reported CNN. Kamala Harris...</Typography>
      </Box>
    </Box>
  )
}

const Home = () => {


  return (
      <>
        
      <Box style={{ marginTop:'1rem'}} >
        <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          loop
          navigation
        >
          <SwiperSlide>
            <Box className='container-column' style={{width:'100%' }}>
              <Box  style={{width:'90%', justifyContent:'center', marginBottom:'1rem'}}>
                <img src={image} style={{   width:'100%'}}></img>
              </Box>
              <Box className='container-row' style={{width:'90%', marginBottom:'1rem', fontSize:'3rem' }}>
                <Typography variant='h3' style={{flex: '1 1 0', fontSize:'2rem'}} >PRESIDENT BIdEN</Typography>
                <Typography variant='h3' style={{flex: '1 1 0', fontSize:'2rem'}}>2 min read</Typography>
              </Box>
              <Box className='container-row' style={{width:'90%', }}>
                <Typography variant='h2'> Joe Biden elected as president of the United States yesterday, reported CNN. Kamala Harris...</Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide><Banner /></SwiperSlide>
          <SwiperSlide><Banner /></SwiperSlide>
          <SwiperSlide><Banner /></SwiperSlide>
        </Swiper>

        <Box boxShadow={8} bgcolor='primary.main' color='primary.contrastText' className='container-column' 
        style={{width:'94%', margin:'2rem auto', padding:'3.4rem',  }}>
        <Typography variant = 'h1' style={{alignSelf:'flex-start', textTransform:'uppercase', marginBottom:'2rem'}}>FEATURED : </Typography>
        <Grid container >
            <Grid item xs={12} sm={6} className='container-row' 
            //style={{justifyContent:'center'}}
            >
              <Box style={{  width: '90%', marginBottom:'2rem'  }}>
                <img src={recommend} style={{width:'100%'}}></img>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box style={{  width: '90%', marginBottom:'2rem' }}>
                <img src={recommend} style={{width:'100%'}}></img>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box style={{  width: '90%', marginBottom:'2rem' }}>
                <img src={recommend} style={{width:'100%'}}></img>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box style={{ width: '90%', marginBottom:'2rem' }}>
                <img src={recommend} style={{width:'100%'}}></img>
              </Box>
            </Grid>
          </Grid>
        </Box>

      </Box>
 
      </>
    )
}
  
export default Home;
