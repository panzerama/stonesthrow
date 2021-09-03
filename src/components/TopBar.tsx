import React from 'react'
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  appbar: {
    height: '60px'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  }
}))

const TopBar: React.FC = () => {
  const classes = useStyles()
  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          Material-UI
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
