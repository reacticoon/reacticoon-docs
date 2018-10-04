import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import { createLinkDoc } from 'utils/createLink';
import { sectionListDocs } from 'utils/sectionList';
import MarkdownPage from 'components/MarkdownPage';

const Docs = ({ data, location }) => (
  <Layout location={location}>
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

export default Docs;
