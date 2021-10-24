import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import TopBar from '../components/TopBar'
import joel from '../img/joel-holland.jpg'

function Index() {
  return (
    <React.Fragment>
      <TopBar />
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          backgroundImage: `url(${joel})`,
          height: '500px',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <Typography variant='h1' color='white'>
          Help is just a stone&apos;s throw away
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          backgroundColor: 'primary.main',
          padding: '20px',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant='h6' color='white' sx={{ m: '5px' }}>
          Reach out for a brief phone interview to determine your needs. Call
          Rebecca at 253-682-8375 or request a callback.
        </Typography>
        <Button variant='contained' color='secondary' sx={{ m: '5px' }}>
          Request Callback
        </Button>
      </Box>
    </React.Fragment>
  )
}

export default Index
