import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import {List, ListItem, ListItemText, Divider} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { SocialHadles } from './SocialHadles';

export const SideBar = () => {
  const [sideDrawer, setSideDrawer] = useState(false);
  const useStyles = makeStyles({
    list: {
      width: 300,
    },
    fullList: {
      width: 'auto',
    },
    BackdropProps: {
      background: 'rgba(0, 0, 0, 0.1)'
    }
  });
  const classes = useStyles();
  const toggleDrawer = ( open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setSideDrawer( open );
  };
  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer ( false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
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
      <Button onClick={toggleDrawer(true)} style={{marginLeft:"2%"}}><MenuIcon style={{fontSize: "40px" ,color: "#641E1E" }} /></Button>
      <SwipeableDrawer
        ModalProps={{
          BackdropProps: {
            classes: {
              root: classes.BackdropProps
            }
          }
        }}
        anchor="left"
        open={sideDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </>
  )
}
