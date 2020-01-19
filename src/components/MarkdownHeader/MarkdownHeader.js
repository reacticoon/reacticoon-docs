import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 8,
    },
    [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing.unit * 4,
      },
  },
  title: {
    color: '#282c34',
    fontWeight: 700,
    fontSize: 32,
  },
});

const MarkdownHeader = ({ title, classes }) => (
  <div className={classes.root}>
    <Typography variant="h1" className={classes.title}>
      {title}
    </Typography>
  </div>
);

export default withStyles(styles)(MarkdownHeader);
