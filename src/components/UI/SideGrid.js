import React from 'react';
import { Box, Button, IconButton, makeStyles, Container, Grid} from '@material-ui/core';
import './style.css';
import imageE from '../../assets/img/economy.jpg';
import imageP from '../../assets/img/farmer.jpg';
import imageG from '../../assets/img/vaccine.jpg';
import imageS from '../../assets/img/science.jpg';
function SideGrid(){
    return(
      <>
      
          <Grid continer>
            <Grid item xs={12} className="grids">
             <a><h7 className="head">POLITICS</h7></a>
             <Box className="para"><p>THE PROTEST</p> <p>2 mins read</p></Box>
             <img src={imageP} alt="politics" className="image"></img>
             <p>The farmers protest is expected to end by...</p>
            </Grid>
            <Grid item xs={12} className="grids">
            <a><h7 className="head">ECONOMY</h7></a>
            <Box className="para"><p>SHAREHOLDER CAPITALISM</p> <p>3 mins </p></Box>
            <img src={imageE} alt="economy" className="image"></img>
             <p>The farmers protest is expected to end by...</p>
            </Grid>
            <Grid item xs={12} className="grids">
            <a><h7 className="head">GLOBAL</h7></a>
            <Box className="para"><p>WHO on vaccine</p> <p>2 mins read</p></Box>
            <img src={imageG} alt="global" className="image"></img>
             <p>Astra Zenca vaccine developed by Oxford...</p>
            </Grid>
            <Grid item xs={12} className="grids">
            <a><h7 className="head">CULTURE</h7></a>
            <Box className="para"><p>BHODO TRIBE</p> <p>2 mins read</p></Box>
            <img src={imageS} alt="culture" className="image"></img>
            <p>Astra Zenca vaccine developed by Oxford...</p>
            </Grid>
            <Grid item xs={12} className="grids">
            <a><h7 className="head">SCIENCE & TECH</h7></a>
            <Box className="para"><p>BHODO TRIBE</p> <p>2 mins read</p></Box>
            <img src={imageS} alt="science&tech" className="image"></img>
            <p>Astra Zenca vaccine developed by Oxford...</p>
            </Grid>
          </Grid>
     
      </>
    )
}
export default SideGrid;