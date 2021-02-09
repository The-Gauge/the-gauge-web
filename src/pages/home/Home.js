import React,{useState} from 'react'
import { makeStyles} from '@material-ui/core/styles';
import {Container, Grid} from '@material-ui/core';

// import Button from '@material-ui/core/Button';
import { Header } from '../../components/header/Header';
import Footer from  '../../components/Footer/Footer';
import SideNewsGrid from '../../components/header/SideNewsGrid';
import '../../components/header/style.css';

const Home = () => {


  return (
      <>
        <Header /> 
        <Grid container>
         <Grid item xs={9}>
         {/* maingrid */}
         </Grid>
         <Grid item xs={3} className="sideGrid">
          <SideNewsGrid/>
        </Grid>
        </Grid> 
        <Footer />
      </>
    )
}
  
export default Home;
