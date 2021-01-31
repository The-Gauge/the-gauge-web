import React from 'react';
import { SideBar } from './SideBar';
import logo from '../../assets/img/theGaugeLogo.png'
import { Box, Button, IconButton, makeStyles } from '@material-ui/core';

import './style.css';
import { SocialHadles } from './SocialHadles';

const categoryList = [
  "POLITICS", "ECONOMY", "GLOBAL", "CULTURE", "SCIENCE&TECH", "MENTAL HEALTH", "READING STACK"
]
const useStyles = makeStyles({

})

export const Header = () => {
  return (
    <>
    <Box className="container-row" style={{justifyContent:"space-between"}}>
      <Box flex="1 1 0" ><SideBar /></Box>
      <Box flex="1 1 0" className="container-row" justifyContent="center">
        <img src={logo} alt="The Guague" className="headerLogo"/>
      </Box> 
      <Box flex="1 1 0" textAlign="right" className="container-column" alignItems="flex-end">
        <Box className="container-row" style={{fontSize:"54px"}}>
          <SocialHadles />
        </Box>
      </Box>
      
    </Box>
    <Box className="container-row" style={{justifyContent:"center"}}>

    </Box>
    </>
  )
}
