module.exports = {
  pathPrefix: 'ignite_driving_gatsby',
  siteMetadata: {
    title: 'Ignite Driving',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `${__dirname}/public/static`,
              ignoreFileExtensions: [`pdf`],
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_CODE,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify`,
  ],
};
