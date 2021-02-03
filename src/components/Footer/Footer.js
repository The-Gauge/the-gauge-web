import React from 'react';
import { SocialHadles } from '../header/SocialHadles';
import './style.css';
import logo from '../../assets/img/theGaugeLogo.png';
import { Box, Button, IconButton, makeStyles, Container, Grid} from '@material-ui/core';
function Footer(){
    return(
      <>
        <Box className="main-footer">
        <Container fixed>
           <Grid container spacing={3}>
                <Grid item xs>
                <h4>CONTACT US</h4>
                 <p className="size">thegauge@gmail.com</p>
                 <a href="#"><h4>SUBMISSION</h4></a>
                 <a href="#"><h4>JOIN US</h4></a>
               </Grid>
               <Grid item xs className="img">
                    <img src={logo} alt="gauge"></img>
               </Grid>
               <Grid item xs>
                  <a href="#"><h4>OUR TEAM</h4></a>
                  <a href="#"><h4>FOLLOW US</h4></a>
                  <SocialHadles/>
                </Grid>
            </Grid>
          </Container>
        <Box className="text-copyright">
         <p className='text-xs-center size'>&copy; Copyright { new Date().getFullYear()} Gauge - All Right Reserved</p>
        </Box>
        </Box>
        </>
    )
}
export default Footer;