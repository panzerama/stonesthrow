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
      <Box sx={{ flexGrow: 1, backgroundImage: `url(${joel})`, height: '500px' }}>
        <Typography variant='h1' color='white'>Help is just a stone&apos;s throw away</Typography>
        <Button variant='contained'>Learn more</Button>
      </Box>
    </React.Fragment>
  )
}

export default Index
