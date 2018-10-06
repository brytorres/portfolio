module.exports = {
  siteMetadata: {
    title: 'Bryan Torres',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/config/typography.js`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Bryan Torres',
        short_name: '@brytorres',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
