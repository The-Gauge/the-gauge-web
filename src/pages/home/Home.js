import React,{useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Header } from '../../components/header/Header';
import Footer from  '../../components/Footer/Footer';
import { Box, Grid, Typography } from '@material-ui/core';
import image from '../../assets/img/sampleArticle.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getBannerArticles } from '../../actions/banner.action';
import { publicUrl } from '../../urlConstants';
import { useHistory } from 'react-router-dom';
import {Featured} from "../../components/Home/Featured"

SwiperCore.use([Autoplay, Navigation]);

const Banner = ({article}) => {

  const history = useHistory()
  const onClick = () => {
    history.push(`/article/${article._id}`)
  }
  return (
    <Box className="container-column"   style={{ width: "100%", cursor:'pointer' }}>
      <Box
      onClick={onClick}
        style={{ width: "90%", height:'46rem', justifyContent: "center", marginBottom: "1rem",
        backgroundImage: `url("${publicUrl}${article.articlePictures[0].imgLink}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition:'center' }}
      >
        {/* <img src={image} style={{ width: "100%" }}></img> */}
      </Box>
      <Box
      onClick={onClick}
        className="container-row"
        style={{ width: "90%", marginBottom: "1rem", fontSize: "3rem" }}
      >
        <Typography variant="h3" style={{ flex: "1 1 0", fontSize: "2rem" }}>
          {article.name}
        </Typography>
        <Typography variant="h3" style={{ flex: "1 1 0", fontSize: "2rem" }}>
         {article.minutesRead.text}
        </Typography>
      </Box>
      <Box onClick={onClick} className="container-row" style={{ width: "90%" }}>
        <Typography variant="h2">
          {" "}
          {article.shortText}
        </Typography>
      </Box>
    </Box>
  );
}

const Home = () => {

  const dispatch = useDispatch()

  const banner = useSelector(state => state.banner);
  const [articles, setArticles] = useState(banner.articles)

  useEffect(() => {
    setArticles(banner.articles)
    console.log(articles)
  }, [banner.articles])

  useEffect(() => {
    window.scrollTo(0,0);
    dispatch(getBannerArticles());
  }, [])

  return (
      <>
      {articles && articles.length > 0 ? (
        <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop
        navigation
      >
        {articles.map( (article) => {
          return (
            <SwiperSlide><Banner article={article} /></SwiperSlide>
          )
        })}
      </Swiper>
      ) : "loading"}
    <Featured />
      </>
    )
}
  
export default Home;
