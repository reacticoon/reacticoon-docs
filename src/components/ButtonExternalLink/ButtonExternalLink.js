import React from 'react';
import ExternalLink from '../ExternalLink';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    border: `1px solid ${theme.colors.dark}`,
    borderRadius: '3px',
    color: theme.colors.darker,
    display: 'inline-block',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.2em',
    padding: '10px',
    textDecoration: 'none!important',
    textTransform: 'uppercase',
    transition: 'background .3s,color .3s',

    '&:hover': {
      color: 'white',
      background: theme.colors.dark,
    },
  },
});

const ButtonExternalLink = ({ children, ...linkProps }) => {
  return <ExternalLink {...linkProps}>{children}</ExternalLink>;
};

export default withStyles(styles)(ButtonExternalLink);
