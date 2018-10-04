import React from 'react'
import { withStyles } from 'Wmaterial-ui/core/styles'
import Link from 'gatsby-link'

const styles = theme => ({
  root: {
    ...theme.app.link,
  }
})

const InternalLink = ({ children, classes, to }) => (
  <Link to={to} className={classes.root}>
    {children}
  </Link>
)

export default withStyles(styles)(InternalLink)
