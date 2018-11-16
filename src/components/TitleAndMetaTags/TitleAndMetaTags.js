import Helmet from 'react-helmet';
import React from 'react';

import { getWebsiteDescription } from '../../modules/config';

// https://www.gatsbyjs.org/docs/add-page-metadata/
const TitleAndMetaTags = ({ title, ogDescription, ogUrl }) => {
  return (
    <Helmet title={title}>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {/* TODO: add logo image */}
      {/* <meta property="og:image" content="/logo-og.png" /> */}
      <meta
        property="og:description"
        content={ogDescription || getWebsiteDescription()}
      />
      <meta property="fb:app_id" content="623268441017527" />
    </Helmet>
  );
};

export default TitleAndMetaTags;
