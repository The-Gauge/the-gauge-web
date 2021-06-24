import React from 'react';
import { SocialHadles } from '../header/SocialHadles';
import './style.css';

import logo from '../../assets/logos/logosmB.png'
import { Box, Grid, useTheme, useMediaQuery} from '@material-ui/core';
import { Link } from 'react-router-dom';
function Footer(){
  
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
    return(
      <>
        <Box className="main-footer">
        {/* <Container fixed> */}
           <Grid container className='container-row' style={{padding:'2rem 8rem', justifyContent:'space-between'   }}>
                <Grid item sm={4} xs={12} style={{textAlign: matches && 'center'}}>
                  <Box className='container-column' style={{alignItems: matches ? 'center' :'flex-start'}}>
                  <h4>CONTACT US</h4>
                    <a targe="_blank" href="mailto:thegaugeofficial@gmail.com" className="size">thegaugeofficial@gmail.com</a>
                 <Link to="/"><h4>HOME</h4></Link>
                 <Link to="/"><h4>JOIN US</h4></Link>
                 </Box>
               </Grid>
               <Grid item sm={4} xs={12} className="img container-row" style={{justifyContent:  'center'}}>
                  <Link to="/"><img src={logo} className='footerLogo' alt="gauge"></img></Link>
               </Grid>
               <Grid item sm={4} xs={12} style={{textAlign: matches && 'center'}}>
                 <Box className='container-column' alignItems={matches ?'center' : 'flex-end'}>
                    <Link  to="/"><h4 style={{paddingLeft:'12px'}}>OUR TEAM</h4></Link>
                    <Link  to="/"><h4 style={{paddingLeft:'12px'}}>FOLLOW US</h4></Link>
                    <Box><SocialHadles/></Box>
                  </Box>
                </Grid>
            </Grid>
          {/* </Container> */}
        <Box className="text-copyright">
         <p className='text-xs-center size'>&copy; Copyright { new Date().getFullYear()} The Gauge - All Right Reserved</p>
        </Box>
        </Box>
        </>
    )
}
export default Footer;