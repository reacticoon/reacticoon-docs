import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

const styles = theme => ({
  root: {
    background: theme.colors.dark,
    color: theme.colors.white,
    paddingTop: 50,
    paddingBottom: 50,

    display: 'flex',
    flexDirection: 'row',
    flexGrow: '0',
    flexShrink: '1',
    flexBasis: '50%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  primaryLink: {
    display: 'inline',
    textDecoration: 'none',
    color: theme.colors.white,
    transition: 'border-color 0.2s ease',
    fontSize: 30,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderColor: theme.colors.subtle,

    [theme.breakpoints.down('lg')]: {
      fontSize: 24,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
    '&:hover': {
      borderColor: theme.colors.white,
    },
  },
  secondaryLabel: {
    color: theme.colors.brand,
    ...theme.fonts.small,
  },
  prevArea: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '0',
    flexShrink: '1',
    flexBasis: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  nextArea: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '0',
    flexShrink: '1',
    flexBasis: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

const NavigationFooter = ({ next, prev, location, classes }) => (
  <div className={classes.root}>
    <div className={classes.prevArea}>
      {prev && (
        <React.Fragment>
          <div className={classes.secondaryLabel}>Previous</div>
          <div
            style={{
              paddingTop: 10,
            }}
          >
            <PrimaryLink
              location={location}
              to={`${prev.id}.html`}
              className={classes.primaryLink}
            >
              {prev.title}
            </PrimaryLink>
          </div>
        </React.Fragment>
      )}
    </div>

    <div className={classes.nextArea}>
      {next && (
        <React.Fragment>
          <div className={classes.secondaryLabel}>Next</div>
          <div
            style={{
              paddingTop: 10,
            }}
          >
            <PrimaryLink
              location={location}
              to={`${next.id}.html`}
              className={classes.primaryLink}
            >
              {next.title}
            </PrimaryLink>
          </div>
        </React.Fragment>
      )}
    </div>
  </div>
);

const PrimaryLink = ({ children, to, location, className }) => {
  // quick fix
  // TODO: replace this with better method of getting correct full url
  const updatedUrl =
    (location && location.pathname.replace(/\/[^/]+\.html/, '/' + to)) || to;
  return (
    <Link className={className} to={updatedUrl}>
      {children}
    </Link>
  );
};

export default withStyles(styles)(NavigationFooter);
