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
        color: '#fff'
    },
    toolbar: {
        [theme.breakpoints.up('sm')]: {
            width: '90%'
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: 1260
        },
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    grow: {
        flexGrow: 1
    },
    rootLink: {
        display: 'flex',
        textDecoration: 'none',
        alignItems: 'center',
        color: theme.palette.secondary.main
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto'
        }
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit',
        width: '100%'
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200
            }
        }
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        paddingLeft: theme.spacing.unit * 2,

        '&:hover': {
            color: theme.palette.secondary.main
        }
    }
});

const Header = ({ siteTitle, classes }) => (
    <AppBar position="fixed" classes={{ root: classes.appBar }}>
        <Toolbar classes={{ root: classes.toolbar }}>
            <Typography variant="title" color="inherit">
                <Link to="/" className={classes.rootLink}>
                    <ReacticoonLogo height={50} />
                    {siteTitle}
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
                        input: classes.inputInput
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
