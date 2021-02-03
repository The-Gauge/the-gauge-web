import React, {useEffect} from 'react';
import { SideBar } from './SideBar';
import logo from '../../assets/img/theGaugeLogo.png'
import { Box, Button, IconButton, InputAdornment, makeStyles, Tab, Tabs, TextField } from '@material-ui/core';

import './style.css';
import { SocialHadles } from './SocialHadles';
import { Home, Search } from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';
import PropTypes from 'prop-types';

const categoryList = [
  "POLITICS", "ECONOMY", "GLOBAL", "CULTURE", "SCIENCE&TECH", "MENTAL HEALTH", "READING STACK"
];

const searchSuggestions = ["temp 1", "temp 2", "temp 3"];

const useStyles = makeStyles({

})


function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    console.log(value);
  }, [value])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <Box className="container-row" style={{justifyContent:"space-between"}}>
      <Box flex="1 1 0" ><SideBar /></Box>
      <Box flex="1 1 0" className="container-row" justifyContent="center">
        <img src={logo} alt="The Guague" className="headerLogo"/>
      </Box> 
      <Box flex="1 1 0" textAlign="right" className="container-column" alignItems="flex-end" justifyContent="space-between" style={{height:"150px"}}>
        <Box className="container-row" style={{fontSize:"54px"}}>
          <SocialHadles />
        </Box>
        <Box className="container-row" style={{fontSize:"54px"}}>
        <Box style={{width:"300px", marginRight:"20px"}}>
            <Autocomplete
              freeSolo
              id="search-bar"
              disableClearable
              options={searchSuggestions}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="SEARCH OUR WORK"
                  margin="normal"
                  variant="filled"
                  InputProps={{...params.InputProps, type: 'search',
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),}}
                  
                />
              )}
            />
          </Box>
          <IconButton style={{color: '#641E1E'}}><Home style={{fontSize: "46px"}}/></IconButton>
          
        </Box>
      </Box>
      
    </Box>
    {/* Tabs */}
    <Box className="container-row" style={{justifyContent:"center"}}>
    <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
    </Box>
    </>
  )
}
