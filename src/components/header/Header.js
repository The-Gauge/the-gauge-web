import React, {useEffect} from 'react';
import { SideBar } from './SideBar';
import logo from '../../assets/img/theGaugeLogo.png'
import { Box, Button, IconButton, InputAdornment, makeStyles, Tab, Tabs, TextField,withStyles, Theme, InputBase,createStyles, fade } from '@material-ui/core';

import './style.css';
import { SocialHadles } from './SocialHadles';
import { Home, Search, Menu } from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';
import PropTypes from 'prop-types';

const categoryList = [
  "POLITICS", "ECONOMY", "GLOBAL", "CULTURE", "MENTAL HEALTH", "READING STACK","musing"
];

const searchSuggestions = ["temp 1", "temp 2", "temp 3"];

const useStyles = makeStyles({
    root: {
      color: "#641E1E",
      fontFamily: "Ramabhadra",
      fontSize: "1.6rem",
      lineHeight: "2rem",
      letterSpacing: "0.195em",
      margin: "0 4px"
    },
    selected:{
      
    },
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        maxWidth: 80,
        width: '100%',
        backgroundColor: 'black',
      },
    },
  
});


function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export const Header = () => {
  const [sideDrawer, setSideDrawer] = React.useState(false);
  const toggleDrawer = ( open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setSideDrawer( open );
  };
  
  const classes = useStyles();
  const [value, setValue] = React.useState(null);

  useEffect(() => {
    console.log(value);
  }, [value])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <Box className="container-row" style={{justifyContent:"space-between", padding:"10px"}}>
      <Box flex="1 1 0" ><Button onClick={toggleDrawer(true)} style={{marginLeft:"2%"}}><Menu style={{fontSize: "3.6rem" ,color: "#641E1E" }} /></Button>
      <SideBar sideDrawer={sideDrawer} toggleDrawer={toggleDrawer} /></Box>
      <Box flex="1 1 0" className="container-row" justifyContent="center">
        <img src={logo} alt="The Guague" className="headerLogo"/>
      </Box> 
      <Box flex="1 1 0" textAlign="right" className="container-column" alignItems="flex-end" justifyContent="space-between" >
        <Box className="container-row">
          <SocialHadles />
        </Box>
        <Box className="container-row" >
        <Box style={{width:"30rem", marginRight:"20px"}}>
            {/* <Autocomplete
              freeSolo
              id="search-bar"
              disableClearable
              options={searchSuggestions}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="SEARCH OUR WORK"
                  margin="normal"
                  inputProps={{...params.InputProps, type: 'search',
                    // startAdornment: (
                    //   <InputAdornment position="start">
                    //     <Search />
                    //   </InputAdornment>
                    // ),
                  }}
                  
                />
              )}
            /> */}
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={searchSuggestions}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="SEARCH OUR WORK"
                    margin="normal"
                    InputProps={{ ...params.InputProps, type: 'search',
                    startAdornment:(
                      <InputAdornment position="start">
                         <Search />
                     </InputAdornment>
                    )
                  }}
                    style={{width:'27rem',margin:'0'}}
                  />
                )}
              />
          </Box>
          <IconButton style={{color: '#641E1E'}}><Home style={{fontSize: "3rem"}}/></IconButton>
          
        </Box>
      </Box>
      
    </Box>
    {/* Tabs */}
    <Box className="container-row" style={{justifyContent:"center", marginTop:"0"}}>
    <Tabs
        classes={{
          root: classes.root,
          indicator: classes.indicator
          
        }}
        TabIndicatorProps={{ children: <span /> }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {categoryList.map((category, index) => (
            <Tab label={category} {...a11yProps(index)} selected classes={{
              root: classes.root,
              indicator: classes.indicator,
              selected: classes.selected    
            }}
              disableRipple/>
          ))}
          {/* <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} /> */}
        </Tabs>
    </Box>
    </>
  )
}
