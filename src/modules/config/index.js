//
// This module contains getters that provides the website configuration.
//
// We use getters instead of constants since the values could be taken from configuration files,
// api, etc
//

import metadata from '../../../metadata';

export const getWebsiteTitle = () => metadata.websiteName;

export const getSiteUrl = () => metadata.siteUrl;

export const getWebsiteDescription = () => metadata.description;

export const getGithubRepositoryUrl = () => metadata.githubRepositoryUrl;

export const isProduction = () => process.env.NODE_ENV === 'production';

export const getGithubUrl = () => metadata.githubUrl;

export const getTwitterUsername = () => metadata.twitterUsername;

export const getTwitterUrl = () =>
  `https://twitter.com/${getTwitterUsername()}`;

export const generateDocGithubFileUrl = path =>
  `${getGithubRepositoryUrl()}/edit/master/content/${path}`;
