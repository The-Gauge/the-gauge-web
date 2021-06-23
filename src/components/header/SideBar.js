import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import {List, ListItem, ListItemText, Divider} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { SocialHadles } from './SocialHadles';
import { useHistory } from 'react-router-dom';

export const SideBar = (props) => {

  const history = useHistory()
  const useStyles = makeStyles({
    list: {
      width: '30rem',
    },
    fullList: {
      width: 'auto',
    },
    BackdropProps: {
      background: 'rgba(0, 0, 0, 0.1)'
    }
  });
  const classes = useStyles();
  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawer( false)}
      onKeyDown={props.toggleDrawer ( false)}
    >
      <List>
        {props.categories && props.categories.length> 0 && props.categories.map((category, index) => (
          <ListItem onClick={() => {
            history.push(`/category/${category._id}`)
          }} button key={category._id}>
            <ListItemText style={{textTransform:'capitalize'}} primary={category.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Contact Us', 'Our Team', 'Join Us'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <SocialHadles />
    </div>
  );

  return (
    <>
      <SwipeableDrawer
        ModalProps={{
          BackdropProps: {
            classes: {
              root: classes.BackdropProps
            }
          }
        }}
        anchor="left"
        open={props.sideDrawer}
        onClose={props.toggleDrawer(false)}
        onOpen={props.toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </>
  )
}
