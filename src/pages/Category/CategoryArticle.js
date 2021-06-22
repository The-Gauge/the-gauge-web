import { Box, colors, Grid, Hidden, makeStyles, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import image from '../../assets/img/sampleArticle.png'
import { Heading } from '../../components/UI/Heading'

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
  }
})

export const CategoryArticle = () => {

 let {id} =  useParams()
 const categories = useSelector(state => state.categories)
 const [category, setCategory] = useState(null)

 useEffect(() => {
   let cat = categories.categories;
   let ans;
   if(cat) {ans = cat.find((category) => {
     return category._id === id
   })}
   setCategory(ans)
   console.log(ans)
 }, [id, categories])

  const classes = useStyles();
  return (
    <>
      {/* <Box className='container-row' justifyContent='center'>
        <Box className='container-row' classes={{ root: classes.heading }} justifyContent='center'>
          Politics
        </Box>
      </Box> */}
      <Heading name={category && category.name} />
      <Grid container style={{ marginTop: '4rem' }} >
        
        <Grid item xs={12} sm={6} className='container-column'>
          <Box style={{
            height:'28rem',
            width: '90%', 
            backgroundImage: `url("${image}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition:'center'
          }}>
            
          </Box>
          <Box className='container-row' classes={{ root: classes.articleTitle }}>
            PRESIDENT BIDEN
              </Box>
          <Box className='container-row' classes={{ root: classes.articleTitle }}>
            BY YAGYA KHERA
              </Box>
        </Grid>
        
      </Grid>
    </>

  )
}
