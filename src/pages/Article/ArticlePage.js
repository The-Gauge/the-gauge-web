import { Box, makeStyles } from '@material-ui/core'
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../../actions/article.action';
import image from '../../assets/img/sampleArticle.png'
import { Featured } from '../../components/Home/Featured';
import { publicUrl } from '../../urlConstants';

const sampleContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s \n, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nWhy do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n\nWhere does it come from?\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\nfdfm fdf fdfd fdf fd fdf dfd f dfd f df dfdf df d fd fdfdfdf fd fd f dfd fdf dfd fd fdfd fd fd fdf dfd ff dfdf df df fdfdfdd ewfrjorjwioefe fef eofjoef oefje fejfofe jofje ofjeofe"

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
  const [newText, setNewText] = useState(null)
  const [aboveImage, setAboveImage] = useState(null)
  const [restArticle, setRestArticle] = useState(null)
  

  useEffect(() => {
    setData(article.data)
    if(data && data.content){
    let formattedContent = data.content.split('\n').map(str => <Box className='article' style={{marginTop:'2rem'}}>{str}</Box>);
    
    setAboveImage(formattedContent[0]);
    formattedContent.shift()
    setRestArticle(formattedContent);
    console.log(formattedContent)
  }
  }, [article.data])

  useEffect(() => {
    dispatch(getArticleById(id));
  }, [id])

  useEffect(() => {
   

  }, [data])

  useEffect(() => {
    window.scrollTo(0,0);
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
        {aboveImage}
        {/* <Box className='article' style={{marginBottom:'2rem'}}>
          {data.content.slice(0,200)}
        </Box> */}
        <Box className={classes.image}>
          <img src={`${publicUrl}${data.articlePictures[0].imgLink}`}
           style={{
             width:'100%'
            //  maxHeight:'50rem', maxWidth:'100%'
             }}>
          </img>
        </Box>
        <Box className={classes.titleDesc}>IMAGE SOURCE : <a target="_blank" href={`${data.articlePictures[0].imgSourceLink}`} className={classes.sourceLink}>{`${data.articlePictures[0].imgSource}`}</a></Box>

{/* {newText} */}
{restArticle}

      </Box>
      ) 
      
      
    )}
    <Featured /> 
      
    </>
  )
}
