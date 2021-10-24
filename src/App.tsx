import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { purple, teal } from '@mui/material/colors'
import Home from './views/Home'

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: teal
  }
})

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
