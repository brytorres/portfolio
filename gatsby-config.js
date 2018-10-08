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
        background_color: '#212121',
        theme_color: '#56a3a6',
        display: 'minimal-ui',
        // icon: 'src/images/gatsby-icon.png',
      },
    },
    { 
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `2rgeh2yddwas`,
        accessToken: `f28089ba90b590a37c85ff02cccfc5420e3a78e01ed8b2d282e39168bc26862f`,
      },
    },
    'gatsby-plugin-offline'
  ],
}
