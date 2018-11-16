import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { Link } from 'gatsby';
import ReacticoonLogo from './ReacticoonLogo';

const styles = theme => ({
  appBar: {
    color: '#fff',
  },
  toolbar: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: 1260,
      width: '90%',
      paddingLeft: 20,
      paddingRight: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
    },
  },
  grow: {
    flexGrow: 1,
  },
  rootLink: {
    display: 'flex',
    textDecoration: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.secondary.main,
  },
  rootLinkLogo: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      paddingRight: theme.spacing.unit * 2, // padding with search
    },
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing.unit * 2, // padding with rootLinkName
    },
  },
  rootLinkName: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing.unit * 4,
    },
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing.unit * 10,
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing.unit * 4,
    },
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    paddingLeft: theme.spacing.unit * 2,

    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
});

const Header = ({ siteTitle, classes }) => (
  <AppBar position="fixed" classes={{ root: classes.appBar }}>
    <Toolbar classes={{ root: classes.toolbar }}>
      <Typography variant="h6" color="inherit">
        <Link to="/" className={classes.rootLink}>
          <span className={classes.rootLinkLogo}>
            <ReacticoonLogo height={40} />
          </span>
          <span className={classes.rootLinkName}>{siteTitle}</span>
        </Link>
      </Typography>

      <div className={classes.grow} />

      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <Input
          placeholder="Search docs…"
          disableUnderline
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>

      <div className={classes.rightLinks}>
        {/* TODO: create versions page */}
        <Link to="/versions" className={classes.link}>
          {/* TODO: generate */}
          v0.0.1
        </Link>

        <a
          href="https://github.com/reacticoon"
          className={classes.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
