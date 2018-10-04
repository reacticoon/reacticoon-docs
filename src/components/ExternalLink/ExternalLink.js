import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.app.link,
  },
});

const ExternalLink = ({ children, classes, href }) =>
  isEmpty(href) ? (
    <span className={classes.root}>{children}</span>
  ) : (
    <a
      href={href}
      className={classes.root}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );

export default withStyles(styles)(ExternalLink);
