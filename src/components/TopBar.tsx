import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Toolbar from '@mui/material/Toolbar'

import logo from '../img/stones-throw-logo.png'

const TopBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ padding: '5px' }}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MoreVertIcon fontSize='large'/>
          </IconButton>
          <img src={logo} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default TopBar
