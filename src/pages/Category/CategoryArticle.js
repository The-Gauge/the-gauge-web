import { Box, colors, Grid, Hidden, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
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

  const classes = useStyles();
  return (
    <>
      {/* <Box className='container-row' justifyContent='center'>
        <Box className='container-row' classes={{ root: classes.heading }} justifyContent='center'>
          Politics
        </Box>
      </Box> */}
      <Heading name='politics' />
      <Grid container style={{ marginTop: '4rem' }} >
        <Grid item xs={12} sm={6} className='container-column'>
          <Box style={{
            width: '90%', borderRadius: '2.4rem',
            //,backgroundImage:`url("https://hatrabbits.com/wp-content/uploads/2016/12/rare-combinaties.jpg")` }}>
          }}>
            <img src={image} style={{ width: '100%' }}></img>
          </Box>
          <Box className='container-row' classes={{ root: classes.articleTitle }}>
            PRESIDENT BIDEN
              </Box>
          <Box className='container-row' classes={{ root: classes.articleTitle }}>
            BY YAGYA KHERA
              </Box>
        </Grid>
        <Grid item xs={12} sm={6} className='container-column'>
          <Box style={{
            width: '90%', borderRadius: '2.4rem',
            //,backgroundImage:`url("https://hatrabbits.com/wp-content/uploads/2016/12/rare-combinaties.jpg")` }}>
          }}>
            <img src={image} style={{ width: '100%' }}></img>
          </Box>
          <Box className='container-row' classes={{ root: classes.articleTitle }}>
            PRESIDENT BIDEN
              </Box>
          <Box className='container-row' classes={{ root: classes.articleTitle }}>
            BY YAGYA KHERA
              </Box>
        </Grid>
        <Grid item xs={12} sm={6} className='container-column'>
          <Box style={{
            width: '90%', borderRadius: '2.4rem',
            //,backgroundImage:`url("https://hatrabbits.com/wp-content/uploads/2016/12/rare-combinaties.jpg")` }}>
          }}>
            <img src={image} style={{ width: '100%' }}></img>
          </Box>
          <Box className='container-row' classes={{ root: classes.articleTitle }}>
            PRESIDENT BIDEN
              </Box>
          <Box className='container-row' classes={{ root: classes.articleTitle }}>
            BY YAGYA KHERA
              </Box>
        </Grid>
        <Grid item xs={12} sm={6} className='container-column'>
          <Box style={{
            width: '90%', borderRadius: '2.4rem',
            //,backgroundImage:`url("https://hatrabbits.com/wp-content/uploads/2016/12/rare-combinaties.jpg")` }}>
          }}>
            <img src={image} style={{ width: '100%' }}></img>
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
