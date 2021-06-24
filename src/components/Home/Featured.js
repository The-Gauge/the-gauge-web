import { Box, Typography, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getFeaturedArticles } from '../../actions/featured.action'
import recommend from '../../assets/img/economy.jpg'
import { publicUrl } from '../../urlConstants'

const ArticleBox = ({article}) => {
  const history = useHistory();
  const onClick = () => {
      history.push(`/article/${article._id}`)
  }
  return (

    <Grid onClick={onClick} item xs={12} sm={6} className='container-row' style={{marginTop:'4rem', cursor: 'pointer', justifyContent:'center'}}
            //style={{justifyContent:'center'}}
            >
              <Box className="container-column"  style={{ height:'30rem', width: '90%', marginBottom:'2rem', backgroundImage: `url("${publicUrl}${article.articlePictures[0].imgLink}")`, justifyContent:'flex-end',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition:'center',
            borderRadius:'1rem',
            position:'relative'  }}>
              <Box className="container-column" style={{height:'8rem',width:'100%', background:'rgb(0,0,0,0.56)', borderRadius:'0rem 0rem 1rem 1rem'}} justifyContent='space-evenly'>
                <Typography variant="h2" style={{color:'white'}}>{article.name}</Typography>
                <Typography variant="h3" style={{color:'white'}}>By {article.author && article.author.name}</Typography>
              </Box>
                
              </Box>
            </Grid>
  )
}

export const Featured = () => {

    const dispatch = useDispatch()
    const featured = useSelector(state => state.featured)
    const [articles, setArticles] = useState(featured.articles)

    useEffect(() => {
        setArticles(featured.articles)
    }, [featured.articles])
    useEffect(() => {
        if(!featured.requested)dispatch(getFeaturedArticles())
    }, [])

    return (
    
        <Box style={{ marginTop:'1rem'}} >
        <Box boxShadow={8} bgcolor='primary.main' color='primary.contrastText' className='container-column' 
        style={{width:'94%', margin:'8rem auto', padding:'3.4rem',  }}>
        <Typography variant = 'h1' style={{alignSelf:'flex-start', textTransform:'uppercase', marginBottom:'2rem'}}>FEATURED : </Typography>
        {featured.loading ?  "Loading..." : (
          <Grid container >
            {articles && articles.length > 0 ?
              articles.map((article) => {
                return (<ArticleBox article={article}/>)
              })
             : "No Articles Found"}
          
        </Grid>
        )
        
          }
        </Box>

      </Box>
    )
}
