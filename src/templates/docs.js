import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import { createLinkDoc } from 'utils/createLink';
import { sectionListDocs } from 'utils/sectionList';
import { withStyles } from '@material-ui/core/styles';
import Layout from 'components/layout';
import MarkdownPage from 'components/MarkdownPage';

const styles = theme => ({
  indexFooterBar_root: {
    // Note: same as MarkdownPage#footer style
    maxWidth: 1260,
    [theme.breakpoints.up('md')]: {
      width: 'calc(100vw - 360px)', // minus sidebar menu HOC
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100vw - 320px)', // minus sidebar menu HOC
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%', // we do not display sidebar
    },
  },
});

const Docs = ({ data, location, classes }) => (
  <Layout
    location={location}
    classes={{
      indexFooterBar_root: classes.indexFooterBar_root,
    }}
  >
    <MarkdownPage
      createLink={createLinkDoc}
      location={location}
      markdownRemark={data.markdownRemark}
      sectionList={sectionListDocs}
      titlePostfix=" &ndash; Reacticoon"
    />
  </Layout>
);

Docs.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query TemplateDocsMarkdown($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        next
        prev
      }
      fields {
        path
        slug
      }
    }
  }
`;

export default withStyles(styles)(Docs);
