const metadata = {
    isProduction: process.env.NODE_ENV === 'production',
    siteUrl: 'https://reacticoon.netlify.com',
    websiteName: 'Reacticoon',
    // https://developers.google.com/web/tools/lighthouse/audits/manifest-short_name-is-not-truncated
    // If the short_name is longer than 12 characters, it'll be truncated on the homescreen.
    websiteShortName: 'Reacticoon',
    websiteVersion: '1.0.0', // TODO: infer from package.json?
    githubUrl: 'https://github.com/reacticoon',
    githubRepositoryUrl: 'https://github.com/reacticoon/reacticoon-docs',
    backgroundColor: '#f9f9f9',
    themeColor: '#61dafb',
    ReacticoonGithubUrl: 'https://github.com/Reacticoon',
    twitterUsername: '', // TODO: twitter username, without the @
    analytics: {
        trackingId: '' // TODO:
    },
    description: 'A JavaScript ecosystem for building React and Redux projects',
    keywords: 'Javascript,React,Redux',
};

module.exports = metadata