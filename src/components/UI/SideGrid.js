import React, { useEffect } from 'react';
import { Box, Button, IconButton, makeStyles, Container, Grid, Paper, Typography, Link} from '@material-ui/core';
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
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getSideGridArticles } from '../../actions/sidegrid.action';
import { publicUrl } from '../../urlConstants';
import { useHistory } from 'react-router-dom';


SwiperCore.use([Navigation,Mousewheel,Autoplay]);

const ArticleCard = ({article}) => {

  const history = useHistory();
  const onClick = () =>{
    if(article) history.push(`/article/${article.id}`)
  }
  return(
    
    <Box onClick= {onClick} display='flex' flexDirection='column' style={{paddingBottom:'3rem', minHeight:'28rem', cursor:'pointer'}}>
     
      <Box bgcolor='primary.main' color='primary.contrastText' style={{ height: '3rem', width: '100%', textTransform: 'uppercase' }} className='container-row'>
        <Typography variant='h3' style={{ marginLeft: '3rem' }}>{article ? article.categoryDetails[0].name : "Sample"}</Typography>
      </Box>
      <Box className='container-row' justifyContent='space-between' style={{width:'100%', marginTop:'1rem', marginBottom:'0.3rem', }}>
        <Typography variant='h2' style={{ textTransform: 'uppercase', fontSize:'1rem !important'
       // flex: '1 1 0'
         }}>{article ? article.name : "Sample"}</Typography>
        <Typography variant='h2' style={{ size:'1rem !important'
         // flex: '1 1 0'
           }}>{article ? article.minutesRead.text : "3 min read"} </Typography>
      </Box>

      <Box style={{ width: '100%', height:'13rem',backgroundImage: article ? `url("${publicUrl}${article.articlePictures[0].imgLink}")` :`url("${imageE}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition:'center' }}>

      </Box>
      <Typography className='container-row' variant='h4' style={{marginBottom:'2rem', flex: '1 1 0', marginBottom:'1rem', }}>{article ? article.shortText : "the farmer's protest might end by lorem ipsum but..."}</Typography>
    </Box>
    
   
  )
}

export const SideGrid = () =>{

    const sidegrids = useSelector(state => state.sidegrids);
    const dispatch = useDispatch();
    const [articles, setArticles] = useState(sidegrids.articles)


    useEffect(() => {
      setArticles(sidegrids.articles)
      
    }, [sidegrids.articles])
    useEffect(() => {
      console.log(articles)
    }, [articles])

    useEffect(() => {
      dispatch(getSideGridArticles())
    }, [])

    return(
      <>
      { articles && articles.length != 0 &&
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
        
          >
            {
                articles.map((article) => {
                 return(
                  <SwiperSlide
                  >
                    <ArticleCard article={article}/>
                  </SwiperSlide>
                  )
              })
            }
            {/* <SwiperSlide style={{
              //borderBottom: '1px solid #641e1e'
              }}>
              <ArticleCard />
            </SwiperSlide>
            <SwiperSlide><ArticleCard /></SwiperSlide>
            <SwiperSlide><ArticleCard /></SwiperSlide>
            <SwiperSlide><ArticleCard /></SwiperSlide> */}
    
    </Swiper>
           
            
      </Paper>
      }
     
      </>
    )
}

