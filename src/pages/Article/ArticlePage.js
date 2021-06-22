import { Box, makeStyles } from '@material-ui/core'
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../../actions/article.action';
import image from '../../assets/img/sampleArticle.png'
import { publicUrl } from '../../urlConstants';
const useStyles = makeStyles({
  articleTitle: {
    fontSize: '4.2rem',
    letterSpacing: '0.455rem',
    textDecoration: 'uppercase'
  },
  titleDesc: {
    fontSize: '2.2rem',
    letterSpacing: '0.455rem',
    textTransform: 'uppercase'
  },
  image: {
    width:'90%',
  },
  sourceLink: {
    color: '#095CFF',
    fontSize: '2.2rem',
    letterSpacing: '0.455rem',
    textTransform: 'uppercase'
  }
})

export const ArticlePage = () => {
  let {id} =  useParams()
  const article = useSelector(state => state.article)
  const dispatch = useDispatch()
  const [data, setData] = useState(article.data)
  

  useEffect(() => {
    setData(article.data)
  }, [article.data])

  useEffect(() => {
    dispatch(getArticleById(id));
  }, [id])

  useEffect(() => {
   

  }, [data])

  useEffect(() => {
    console.log(id)
    dispatch(getArticleById(id));
  }, [])


  const classes = useStyles();
  return (
    <>
    {article.loading ? "Loading" : (

      data && (
        <Box className='container-column' style={{ paddingLeft: '3rem', alignItems: 'flex-start' }}>
        <Box display='flex' flexDirection='column' style={{ paddingLeft: '1rem', marginBottom: '1rem' }}>
          <Box className={classes.articleTitle}>{data.name}</Box>
          <Box className={classes.titleDesc}>{data.author.name}</Box>
          <Box className={classes.titleDesc}>{moment(data.createdAt).format("MMM DD, YYYY")}</Box>
          <Box className={classes.titleDesc}>{moment(data.createdAt).format("LT")}</Box>

        </Box>
        <Box className='article' style={{marginBottom:'2rem'}}>
          {data.content.slice(0,200)}
        </Box>
        <Box className={classes.image}>
          <img src={`${publicUrl}${data.articlePictures[0].imgLink}`}
           style={{height:'50rem'}}>
          </img>
        </Box>
        <Box className={classes.titleDesc}>IMAGE SOURCE : <a href={`${publicUrl}${data.articlePictures[0].imgLink}`} className={classes.sourceLink}>{`${data.articlePictures[0].imgSource}`}</a></Box>
        <Box className='article' style={{marginTop:'2rem'}}>
        {data.content.slice(200)}
        {"this is \" this works \" \n do"}
   
        </Box>


      </Box>
      ) 
      
      
    )}
      
    </>
  )
}
