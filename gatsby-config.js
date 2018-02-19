module.exports = {
  pathPrefix: `/ignite_driving_gatsby`,
  siteMetadata: {
    title: `Ignite Driving`,
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
    `gatsby-transformer-remark`,
    `gatsby-transformer-javascript-frontmatter`
  ],
}
