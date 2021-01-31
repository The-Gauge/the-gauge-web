import React from 'react';
import { SideBar } from './SideBar';
import logo from '../../assets/img/theGaugeLogo.png'
import { Box } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Instagram } from '@material-ui/icons';

const categoryList = [
  "POLITICS", "ECONOMY", "GLOBAL", "CULTURE", "SCIENCE&TECH", "MENTAL HEALTH", "READING STACK"
]

export const Header = () => {
  return (
    <>
    <Box className="container-row" style={{justifyContent:"space-between"}}>
      <Box flex="1 1 0" ><SideBar /></Box>
      <Box flex="1 1 0" className="container-row" justifyContent="center">
        <img src={logo} alt="The Guague" className="headerLogo"/>
      </Box> 
      <Box flex="1 1 0" textAlign="right" className="container-column" alignItems="flex-end">
        <Box className="container-row">
          <Instagram className="fab fa-instagram instagram"/>
        </Box>
      </Box>

    </Box>
    <Box className="container-row" style={{justifyContent:"center"}}>
      I am at center
    </Box>
    </>
  )
}
