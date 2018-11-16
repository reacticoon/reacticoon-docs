import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing.unit * 10
        }
    },
    title: {
        color: '#282c34',
        fontWeight: 700,
    }
});

const MarkdownHeader = ({ title, classes }) => (
    <div className={classes.root}>
        <Typography variant="h2" className={classes.title}>
            {title}
        </Typography>
    </div>
);

export default withStyles(styles)(MarkdownHeader);
