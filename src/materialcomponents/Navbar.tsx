import React from 'react';
import { Toolbar } from '@mui/material';
import { AppBar } from '@mui/material';
import { IconButton } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import logo from '../images/logo-black.png'

export const Navbar = () => {


  return (
    <div>
       <AppBar position='static'> 
            <Toolbar>
                 <IconButton size='large' edge='start' color='inherit' aria-label='logo '>
                     logo
                 </IconButton>
            </Toolbar>

            <Typography variant='h6' component='div' sx={{flexGrow:1}}>
                 Bvote
            </Typography>

            <Stack direction='row' spacing={2}>
                   <Button color='inherit' > Home </Button>
                   <Button color='inherit'> Accreditation </Button>
                   <Button color='inherit'> Voting-Portal </Button>
                   <Button color='inherit'> Results </Button>
                   <Button color='inherit'> Contact-Us </Button>
            </Stack>
       </AppBar>
   </div>
  )
}
