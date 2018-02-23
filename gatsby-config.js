module.exports = {
  pathPrefix: 'ignite_driving_gatsby',
  siteMetadata: {
    title: 'Ignite Driving',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir:`${__dirname}/public/static`,
              ignoreFileExtensions: [`pdf`]
            }
          }
        ]
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify`
  ],
}
