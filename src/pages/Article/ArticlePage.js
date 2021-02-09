import { Box, makeStyles } from '@material-ui/core'
import React from 'react';
import image from '../../assets/img/sampleArticle.png'
const useStyles = makeStyles({
  articleTitle: {
    fontSize: '4.2rem',
    letterSpacing: '0.455rem',
    textDecoration: 'uppercase'
  },
  titleDesc: {
    fontSize: '2.2rem',
    letterSpacing: '0.455rem',
    textDecoration: 'uppercase'
  },
  image: {
    width:'90%',
  },
  sourceLink: {
    color: '#095CFF',
    fontSize: '2.2rem',
    letterSpacing: '0.455rem',
    textDecoration: 'uppercase'
  }
})

export const ArticlePage = () => {
  const classes = useStyles();
  return (
    <>
      <Box className='container-column' style={{ paddingLeft: '3rem', alignItems: 'flex-start' }}>
        <Box display='flex' flexDirection='column' style={{ paddingLeft: '1rem', marginBottom: '1rem' }}>
          <Box className={classes.articleTitle}>JOE BIDEN</Box>
          <Box className={classes.titleDesc}>BY YAGYA KHERA</Box>
          <Box className={classes.titleDesc}>Jan 26, 2020</Box>
          <Box className={classes.titleDesc}>9:46 AM</Box>

        </Box>
        <Box className='article' style={{marginBottom:'2rem'}}>
          Joe Biden was elected as the president of the US, a report by CNN. Here are some interesting facts about the President and the Vice President Kamala Harris. A democratic party candidate, he was elected as the
        </Box>
        <Box className={classes.image}>
          <img src="https://cdn3.wpbeginner.com/wp-content/uploads/2018/12/freewebsitehosting.png"
           style={{width:'100%'}}>
          </img>
        </Box>
        <Box className={classes.titleDesc}>IMAGE SOURCE : <a href="https://cdn3.wpbeginner.com/wp-content/uploads/2018/12/freewebsitehosting.png" className={classes.sourceLink}>source name</a></Box>
        <Box className='article' style={{marginTop:'2rem'}}>
          Joe Biden was elected as the president of the US, a report by CNN. Here are some interesting facts about the President and the Vice President Kamala Harris. A democratic party candidate, he was elected as the
        </Box>


      </Box>
    </>
  )
}
