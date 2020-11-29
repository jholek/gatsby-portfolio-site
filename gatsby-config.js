/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`inter`, `roboto`],
        display: 'swap',
      },
    },
    // {
    //   resolve: 'gatsby-source-strapi',
    //   options: {
    //     apiURL: 'http://localhost:1337',
    //     queryLimit: 1000, // Default to 100
    //     //   contentTypes : `jobs`, `projects`, `blogs`,
    //     //   singleType : `about`
    //     //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
    //     contentTypes: [],
    //     singleTypes: ['about'],
    //   },
    // },
  ],
};
