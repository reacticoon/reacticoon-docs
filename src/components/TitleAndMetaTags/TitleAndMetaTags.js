import Helmet from 'react-helmet';
import React from 'react';

import { getWebsiteDescription } from '../../modules/config';

const TitleAndMetaTags = ({ title, ogDescription, ogUrl }) => {
  return (
    <Helmet title={title}>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:image" content="/logo-og.png" />
      <meta
        property="og:description"
        content={ogDescription || getWebsiteDescription()}
      />
      <meta property="fb:app_id" content="623268441017527" />
    </Helmet>
  );
};

export default TitleAndMetaTags;