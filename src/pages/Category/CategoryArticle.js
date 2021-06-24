import { Box, colors, Grid, Hidden, makeStyles, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { getCategoryArticles, resetArticles } from '../../actions/articles.action'
import image from '../../assets/img/sampleArticle.png'
import { Featured } from '../../components/Home/Featured'
import { Heading } from '../../components/UI/Heading'
import { publicUrl } from '../../urlConstants'

const useStyles = makeStyles({
  heading: {
    background: '#641E1E',
    boxShadow: '8px 8px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '70px',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: '30px',
    lineHeight: '60px',
    letterSpacing: '0.185em',
    width: "60%"
  },
  articleTitle: {
    color: "#000000",
    fontFamily: "Ramabhadra",
    fontSize: "18px",
    letterSpacing: "0.195em",
    textAlign:'center',
    justifySelf:'center'
  }
})


export const CategoryArticle = () => {

 let {id} =  useParams()
 const categories = useSelector(state => state.categories)
 
const dispatch = useDispatch()

 const articles = useSelector(state => state.articles)
 const [data, setData] = useState(articles.articles)

 const [category, setCategory] = useState(null)

 useEffect(() => {
   setData(articles.articles)
 }, [articles.articles])

 useEffect(() => {
   let cat = categories.categories;
   let ans;
   if(cat) {ans = cat.find((category) => {
     return category._id === id
   })}
   setCategory(ans)
 }, [id, categories])

 useEffect(() => {
  window.scrollTo(0,0);
   dispatch(resetArticles())
   if(category) dispatch(getCategoryArticles(category._id))
 }, [category])


  const classes = useStyles();

const ArticleBox = ({article}) => {

  const history = useHistory()
  const onClick = () => {
    history.push(`/article/${article._id}`)
  }

  return (
    <Grid item xs={12} sm={6} className='container-column' onClick={onClick} style={{cursor:'pointer',marginBottom:'3rem'}}>
          <Box style={{
            height:'28rem',
            width: '90%', 
            backgroundImage: `url("${publicUrl}${article.articlePictures[0].imgLink}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition:'center'
          }}>
            
          </Box>
          <Box style={{width:'90%'}} justifyContent="center" className='container-row' classes={{ root: classes.articleTitle }}>
          {article.name}
              </Box>
          <Box style={{width:'90%'}} justifyContent="center" className='container-row' classes={{ root: classes.articleTitle }}>
            {article.author && article.author.name}
              </Box>
        </Grid>
  )
}

  return (
    <>
      {/* <Box className='container-row' justifyContent='center'>
        <Box className='container-row' classes={{ root: classes.heading }} justifyContent='center'>
          Politics
        </Box>
      </Box> */}
      <Heading name={category && category.name} />
      { articles.loading ? "Loading" : (
        <Grid container style={{ marginTop: '4rem' }} >
          {data.length > 0 ? 
          data.map((article) => {
            return (
              article && <ArticleBox article={article}/>
            )
          })

          :
          "No Articles Found"
          }
        
          
        </Grid>
      )}
      <Featured />
      
    </>

  )
}
