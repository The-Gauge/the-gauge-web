import { AppBar, Box, Button, IconButton, InputAdornment, TextField, Toolbar, Typography, withStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Menu from '@material-ui/icons/Menu';
import { SideBar } from './SideBar';
import { Autocomplete } from '@material-ui/lab';
import { Search } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../actions/category.action';
import { searchArticles } from '../../actions/articles.action';

export const HeaderFixed = (props) => {
  const searchSuggestions = ["covid vaccination", "news", "economy"];

  const location = useLocation()
  const dispatch = useDispatch();
  const history = useHistory();

  const [search, setSearch] = useState(null)
  

  const categories = useSelector(state => state.categories);

  const [sideDrawer, setSideDrawer] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setSideDrawer(open);
  };
  // useEffect(() => {
    

    
  // }, [search])

  const handleChange = (e) =>{
    console.log(e.target.value)
    // const val = e.target.val;
        if((e.target.value != null && e.target.value !="") && location.pathname != '/search') history.push("/search")
    dispatch(searchArticles(e.target.value))
  }

  useEffect(() => {
    if(!categories.requested)dispatch(getAllCategory());
    
  }, [])

  const CssTextField = withStyles({
    root: {
      '& input': {
        color: 'white'
      },
      color: 'white',
      '& label': {
        color: 'white'
      },
      '& MuiInputAdornment': {
        color: 'white'
      },
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: 'white'
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
     
    },
  })(TextField);

  return (
    <>
      <AppBar position="fixed" >
        <Toolbar style={{ padding: '0', justifyContent:'space-between' }} className='container-row'>
          <Box className='container-row'><Button onClick={toggleDrawer(true)}  >
            <Typography variant="h6" color="inherit"><Menu style={{ fontSize: "3.3rem", color: 'white' }} /></Typography></Button>
          <SideBar categories={categories.categories} sideDrawer={sideDrawer} toggleDrawer={toggleDrawer} />
          <Typography variant="h2" color="inherit">
            The Gauge
          </Typography>
          </Box>
          <input
                    value={search}
                    onChange={handleChange}
                    style={{ marginRight:'2rem', height:'4rem', maxWidth:'30rem',width:'30rem' }}
        
                    className=" text-center focus:outline-none focus:border-blue-500 border border-gray-300 py-2 w-full"
                    placeholder="Search our work"
                  />
          {/* <Autocomplete
            freeSolo
            // onChange={(e) => { 
            //   setSearch(e.target.textContent)
            // }}
            id="free-solo-1-demo"
            disableClearable
            options={searchSuggestions}
            renderInput={(params) => (
              <TextField
              color="secondary"
             
                {...params}
                value={search}
                onChange={
                  handleChange
                }
                label="SEARCH OUR WORK"
                margin="normal"
                InputProps={{
                  ...params.InputProps, type: 'search',
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search style={{ color: 'white' }} />
                    </InputAdornment>
                  )
                }}
                style={{ width: '25rem', marginRight: '1rem', color:'white' }}
              />
            )}
          /> */}
        </Toolbar>
      </AppBar>
    </>

  )
}
