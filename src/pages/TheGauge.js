import {  Box, Container, Grid, Hidden, Paper, Slide, useMediaQuery, useScrollTrigger, useTheme } from '@material-ui/core';
import React, {  useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import Footer from '../components/Footer/Footer';
import { Header } from '../components/header/Header';
import { ArticlePage } from './Article/ArticlePage';
import { CategoryArticle } from './Category/CategoryArticle';
import Home from './home/Home';
import {SideGrid} from '../components/UI/SideGrid';
import { HeaderFixed } from '../components/header/HeaderFixed';
import { Team } from './Team/FoundingTeam';


function HideOnScroll(props) {
  const { children, window } = props;
  console.log(children)
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
    
  );
}

export const TheGauge = (props) => {
  let { path, url } = useRouteMatch();
  const [fixedNav, setFixedNav] = useState(0)
  React.useEffect(() => {
  
    
  }, [fixedNav])

  function handleScroll(){
    let newScrollPosition = window.scrollY;
     if(newScrollPosition>140) setFixedNav(true)
     else setFixedNav(false);
  }
  
  window.addEventListener('scroll', handleScroll, {passive: true});

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
    {matches? (
      <>
      <Header />
  
      {/* <Slide appear={false } direction="down" in={fixedNav}> */}
        
          <Box display='flex' style={{display:fixedNav? 'flex' : 'none'}}>
            <HeaderFixed/>
          </Box>
          
      {/* </Slide> */}
      </>
    ):(
      <Box style={{height:'9rem'}}>
        <HeaderFixed/>
      </Box>
    )}
    {/* <Slide appear={false } direction="down" in={fixedNav}>
        <Box display='flex' style={{position:'fixed', margin:'0'}}>
          <HeaderFixed/>
        </Box>
    </Slide> */}
      
    <Grid container style={{ marginTop: '10px', marginBottom: '50px' }} >
      <Grid item xs={12} sm={9} >
      <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={`/category/:id`} component={CategoryArticle} />
          <Route exact path={`/article/:id`} component={ArticlePage} />
          <Route exact path={`/team`} component={Team} />
          <Redirect to={path} />
      </Switch>
      </Grid>
      <Grid item xs={3}>
        <Hidden xsDown>
          
           <SideGrid/>
        </Hidden>
      </Grid>
    </Grid>
    <Footer />
    </>
  )
}
