import { Box, makeStyles } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles({
  heading: {
    background: '#641E1E',
    boxShadow: '8px 8px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '70px',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: '2.5rem',
    lineHeight: '60px',
    letterSpacing: '0.185em',
    minWidth: "60%",
    padding:'0 4rem'
  },
})

export const Heading = (props) => {

  const classes = useStyles();
  return (
    <Box className='container-row' justifyContent='center'>
        <Box className='container-row' classes={{ root: classes.heading }} justifyContent='center'>
          {props.name}
        </Box>
      </Box>
  )
}
