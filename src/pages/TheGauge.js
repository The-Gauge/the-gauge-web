import { Grid, Hidden, Paper } from '@material-ui/core';
import React from 'react';
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

export const TheGauge = () => {
  let { path, url } = useRouteMatch();
  console.log(path+' and  '+ url);
  return (
    <>
    <Header />
    <Grid container style={{ marginTop: '10px', marginBottom: '50px' }} >
      <Grid item xs={12} sm={9} >
      <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={`/category/:id`} component={CategoryArticle} />
          <Route exact path={`/article/:id`} component={ArticlePage} />
          <Redirect to={path} />
          
      </Switch>
      </Grid>
      <Grid item xs={3}>
        <Hidden xsDown>
          <Paper style={{ position: 'fixed', height: '100%', width: '100%' }}>
            fixed side bar
          </Paper>
        </Hidden>
      </Grid>
    </Grid>
    <Footer />
    </>
  )
}
