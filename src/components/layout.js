import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import withRoot from '../withRoot';
import Header from './header';
import IndexFooterBar from './IndexFooterBar';

const styles = theme => ({
  root: {
    paddingTop: theme.app.header.height,
    // paddingLeft: theme.spacing.unit * 2,
    // paddingRight: theme.spacing.unit * 2,
    // [theme.breakpoints.up('sm')]: {
    //     paddingLeft: theme.spacing.unit * 3,
    //     paddingRight: theme.spacing.unit * 3
    // }
  },
});

const Layout = ({ children, classes }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />

        <div className={classes.root}>{children}</div>

        <IndexFooterBar />
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Layout));
