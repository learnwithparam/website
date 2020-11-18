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
          `@weknow/gatsby-remark-twitter`,
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
          {
            resolve: `gatsby-remark-social-cards`,
            options: {
              title: {
                // This is the frontmatter field the title should come from
                field: 'title',
                // Currently only supports DejaVuSansCondensed
                // More fonts coming soon!
                font: 'DejaVuSansCondensed',
                color: 'black', // black|white
                size: 48, // 16|24|32|48|64
                style: 'bold', // normal|bold|italic
                x: null, // Will default to xMargin
                y: null, // Will default to yMargin
              },
              meta: {
                parts: [
                  { field: 'series' },
                  ' » ',
                  { field: 'date', format: 'mmmm dS' },
                ],
                // Currently only supports DejaVuSansCondensed
                // More fonts coming soon!
                font: 'DejaVuSansCondensed',
                color: 'black', // black|white
                size: 24, // 16|24|32|48|64
                style: 'normal', // normal|bold|italic
                x: null, // Will default to xMargin
                y: null, // Will default to cardHeight - yMargin - size
              },
              background: '#F9F6FC', // Background color for the card
              xMargin: 24, // Edge margin used when x value is not set
              yMargin: 24, // Edge margin used when y value is not set
            },
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Bitter\:700`, `Rubik\:400`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint:
          'https://live.us4.list-manage.com/subscribe/post?u=fbe609052f18d98b13eb516f2&amp;id=4cf68a060f',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Learn with Param`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FCF8F3`,
        theme_color: `#FCF8F3`,
        display: `minimal-ui`,
        icon: `images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
