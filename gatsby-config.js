module.exports = {
  siteMetadata: {
    title: `Learn with Param`,
    description: `Learn web and mobile development using JavaScript and its kids`,
    author: `Param Harrison`,
    siteUrl: `https://learnwithparam.com`,
    social: {
      twitter: `learnwithparam`,
    },
    hashTags: ['learnByCoding', '301DaysOfCode', '100DaysOfCode', 'CodeNewbie'],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-plugin-catch-links`,
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
          {
            resolve: `@weknow/gatsby-remark-codepen`,
            options: {
              theme: `default`,
              height: 400,
            },
          },
          {
            resolve: require.resolve('./plugins/remark-embedder'),
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-133810822-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Bitter`,
            variants: [`700`],
          },
          {
            family: `Rubik`,
            variants: [`400`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FCF8F3`,
        theme_color: `#FCF8F3`,
        display: `minimal-ui`,
        icon: `images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-remark-social-cards`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
