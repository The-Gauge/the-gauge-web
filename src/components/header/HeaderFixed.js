import { AppBar, Box, Button, IconButton, InputAdornment, TextField, Toolbar, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import Menu from '@material-ui/icons/Menu';
import { SideBar } from './SideBar';
import { Autocomplete } from '@material-ui/lab';
import { Search } from '@material-ui/icons';

export const HeaderFixed = (props) => {
  const searchSuggestions = ['fdf', 'fdf']

  const [sideDrawer, setSideDrawer] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setSideDrawer(open);
  };

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
      input: {
        background: 'yellow'
      }
    },
  })(TextField);

  return (
    <>
      <AppBar position="fixed" {...props}>
        <Toolbar style={{ padding: '0', justifyContent:'space-between' }} className='container-row'>
          <Box className='container-row'><Button onClick={toggleDrawer(true)}  >
            <Typography variant="h6" color="inherit"><Menu style={{ fontSize: "3.3rem", color: 'white' }} /></Typography></Button>
          <SideBar sideDrawer={sideDrawer} toggleDrawer={toggleDrawer} />
          <Typography variant="h2" color="inherit">
            The Gauge
          </Typography>
          </Box>
          
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={searchSuggestions}
            renderInput={(params) => (
              <CssTextField
                {...params}
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
                style={{ width: '25rem', marginRight: '1rem' }}
              />
            )}
          />
        </Toolbar>
      </AppBar>
    </>

  )
}
