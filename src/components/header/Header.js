import React, {useEffect} from 'react';
import { SideBar } from './SideBar';
import logo from '../../assets/img/theGaugeLogo.png'
import { Box, Button, IconButton, InputAdornment, makeStyles, Tab, Tabs, TextField,withStyles, Theme, InputBase,createStyles, fade } from '@material-ui/core';

import './style.css';
import { SocialHadles } from './SocialHadles';
import { Home, Search } from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';
import PropTypes from 'prop-types';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }),
)(TextField);

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
      <Box flex="1 1 0" ><SideBar /></Box>
      <Box flex="1 1 0" className="container-row" justifyContent="center">
        <img src={logo} alt="The Guague" className="headerLogo"/>
      </Box> 
      <Box flex="1 1 0" textAlign="right" className="container-column" alignItems="flex-end" justifyContent="space-between" >
        <Box className="container-row">
          <SocialHadles />
        </Box>
        <Box className="container-row" >
        <Box style={{width:"30rem", marginRight:"20px"}}>
            <Autocomplete
              freeSolo
              id="search-bar"
              disableClearable
              options={searchSuggestions}
              renderInput={(params) => (
                <BootstrapInput
                  placeholder="SEARCH OUR WORK"
                  size='small'
                  {...params}
                  label="SEARCH OUR WORK"
                  margin="normal"
                  inputProps={{...params.InputProps, type: 'search',
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),}}
                  
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
