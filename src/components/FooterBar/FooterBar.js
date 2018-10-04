import React from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    backgroundColor: theme.colors.darker,
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    // links inehrit color from parent
    color: '#fff',

    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing.unit * 5,
      paddingRight: theme.spacing.unit * 5,
    }
  }
})

const FooterBar = ({ children, classes }) => (
  <div className={classes.root}>{children}</div>
)

export default withStyles(styles)(FooterBar)
