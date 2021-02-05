import { Box, colors, Grid, Hidden, makeStyles, Paper } from '@material-ui/core'
import React from 'react'

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
      <Grid container style={{ marginTop: '10px', marginBottom: '50px' }} >
        <Grid item xs={12} sm={9} >
          <Box className='container-row' justifyContent='center'>
            <Box className='container-row' classes={{ root: classes.heading }} justifyContent='center'>
              Politics
        </Box>
          </Box>
          <Grid container style={{ marginTop: '20px' }} spacing={8}>
            <Grid item xs={12} sm={6} className='container-column'>
              <Box style={{ background: 'gray', height: '350px', width: '80%', borderRadius: '44px' }}>

              </Box>
              <Box className='container-row' classes={{ root: classes.articleTitle }}>
                PRESIDENT BIDEN
              </Box>
              <Box className='container-row' classes={{ root: classes.articleTitle }}>
                BY YAGYA KHERA
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} className='container-column'>
              <Box style={{ background: 'gray', height: '350px', width: '80%', borderRadius: '44px' }}>

              </Box>
              <Box className='container-row' classes={{ root: classes.articleTitle }}>
                PRESIDENT BIDEN
              </Box>
              <Box className='container-row' classes={{ root: classes.articleTitle }}>
                BY YAGYA KHERA
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} className='container-column'>
              <Box style={{ background: 'gray', height: '350px', width: '80%', borderRadius: '44px' }}>

              </Box>
              <Box className='container-row' classes={{ root: classes.articleTitle }}>
                PRESIDENT BIDEN
              </Box>
              <Box className='container-row' classes={{ root: classes.articleTitle }}>
                BY YAGYA KHERA
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} className='container-column'>
              <Box style={{ background: 'gray', height: '350px', width: '80%', borderRadius: '44px' }}>
              </Box>
              <Box className='container-row' classes={{ root: classes.articleTitle }}>
                PRESIDENT BIDEN
              </Box>
              <Box className='container-row' classes={{ root: classes.articleTitle }}>
                BY YAGYA KHERA
              </Box>

            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Hidden xsDown>
            <Paper style={{ position: 'fixed', height: '100%', width:'100%' }}>
              fixed side bar
        </Paper>
          </Hidden>
        </Grid>
      </Grid>
    </>

  )
}
