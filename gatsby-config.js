const metadata = require('./metadata');

module.exports = {
  siteMetadata: {
    title: metadata.websiteName,
    ...metadata,
  },
  plugins: [
    // Custom plugin
    // allows to retrieve the /content/home/examples code examples
    {
      resolve: 'gatsby-transformer-home-example-code',
    },
    // Generate favicon
    // https://github.com/Creatiwity/gatsby-plugin-favicon
    //
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        // TODO: The recommended size for the file is: 1500x1500px.
        logo: './assets/favicon.png',

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#282c34',
        theme_color: '#61dafb',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    // read markdown files and parse them to be used as posts.
    // https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/adding-markdown-pages.md
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'packages',
        path: `${__dirname}/content/`,
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-image/
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: path.join(__dirname, `src`, `images`),
    //   },
    // },
    // required by gatsby-image
    // https://www.npmjs.com/package/gatsby-image
    // Creates ImageSharp nodes from image types that are supported by the Sharp image processing
    // library and provides fields in their GraphQL types for processing your images in a variety of
    // ways including resizing, cropping, and creating responsive images.
    // https://www.npmjs.com/package/gatsby-transformer-sharp
    `gatsby-transformer-sharp`,
    // required by gatsby-image
    // https://www.npmjs.com/package/gatsby-image
    // Exposes several image processing functions built on the Sharp image processing library.
    // This is a low-level helper plugin generally used by other Gatsby plugins. You generally s
    // houldn't be using this directly but might find it helpful if doing very custom image
    // processing.
    // https://www.npmjs.com/package/gatsby-plugin-sharp
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // Wraps iframes or objects (e.g. embedded YouTube videos) within markdown files in a
          // responsive elastic container with a fixed aspect ratio. This ensures that the iframe
          // or object will scale proportionally and to the full width of its container.
          // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-responsive-iframe
          `gatsby-remark-responsive-iframe`,

          // https://github.com/raae/gatsby-remark-oembed
          // list of embeded: https://oembed.com/
          {
            resolve: `gatsby-remark-oembed`,
            options: {
              providers: {
                // Important to exclude providers
                // that adds js to the page.
                // If you do not need them.
                exclude: [
                  //"Reddit"
                ],
              },
            },
          },

          // Processes images in markdown so they can be used in the production build.
          // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-images
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 840,
              // Remove the default behavior of adding a link to each
              // image.
              linkImagesToOriginal: true,
              // Analyze images' pixel density to make decisions about
              // target image size. This is what GitHub is doing when
              // embedding images in tickets. This is a useful setting
              // for documentation pages with a lot of screenshots.
              // It can have unintended side effects on high pixel
              // density artworks.
              //
              // Example: A screenshot made on a retina screen with a
              // resolution of 144 (e.g. Macbook) and a width of 100px,
              // will be rendered at 50px.
              //
              // Defaults to false.
              sizeByPixelDensity: false,
            },
          },
          // add additionnal meta to external links on markdown.
          // https://github.com/JLongley/gatsby-remark-external-links
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              // https://developers.google.com/web/tools/lighthouse/audits/noopener
              rel: 'noopener noreferrer',
            },
          },
          //
          // TODO: comment
          //
          'gatsby-remark-autolink-headers',
          // {
          //     resolve: 'gatsby-remark-code-repls',
          //     options: {
          //         defaultText: '<b>Try it on CodePen</b>',
          //         directory: `${__dirname}/examples/`,
          //         externals: [
          //             `//unpkg.com/react/umd/react.development.js`,
          //             `//unpkg.com/react-dom/umd/react-dom.development.js`
          //         ],
          //         dependencies: [`react`, `react-dom`],
          //         redirectTemplate: `${__dirname}/src/templates/codepen-example.js`,
          //         target: '_blank'
          //     }
          // },
          // {
          //     resolve: 'gatsby-remark-embed-snippet',
          //     options: {
          //         classPrefix: 'gatsby-code-',
          //         directory: `${__dirname}/examples/`
          //     }
          // },
          // Adds syntax highlighting to code blocks in markdown files using PrismJS
          // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-prismjs
          // (http://prismjs.com/).
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
            },
          },
          // Copies local files linked to/from markdown to your public folder.
          // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-copy-linked-files
          {
            resolve: 'gatsby-remark-copy-linked-files',
          },
          //
          // TODO: comment
          'gatsby-remark-smartypants',
        ],
      },
    },
    //
    // TODO: comment
    //
    'gatsby-plugin-react-helmet',
    // Add canonical links to HTML pages Gatsby generates.
    // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-canonical-urls
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `${metadata.siteUrl}`,
      },
    },
    // This plugin takes your configuration and generates a web manifest file so our website can
    // be added to an Android homescreen
    // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${metadata.websiteName}`,
        short_name: `${metadata.websiteShortName}`,
        start_url: `/`,
        background_color: `${metadata.backgroundColor}`,
        theme_color: `${metadata.themeColor}`,
        display: `standalone`, // minimal-ui
        icons: [
          // Everything in /static will be copied to an equivalent
          // directory in /public during development and build, so
          // assuming your favicons are in /static/favicons,
          // you can reference them here
          {
            src: '/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-offline/README.md
    //
    // must be after gatsby-plugin-manifest configuration
    `gatsby-plugin-offline`,
    // Sets up google analytics
    // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-google-analytics/README.md
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: metadata.analytics.trackingId,
      },
    },
    // robots.txt
    // https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/
    {
      resolve: `gatsby-plugin-robots-txt`,
    },
    // https://www.npmjs.com/package/gatsby-plugin-sitemap
    {
      resolve: `gatsby-plugin-sitemap`,
    },
  ],
};
