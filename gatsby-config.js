/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },

    // {
    //   resolve: 'gatsby-source-rest-api',
    //   options: {
    //     endpoints: [
    //       "https://portfolio-strapi4-api.herokuapp.com/api/jobs",
    //       "https://portfolio-strapi4-api.herokuapp.com/api/projects",
    //       // "https://portfolio-strapi4-api.herokuapp.com/api/about-page?populate=*",
    //     ],
    //   },
    // },

    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `https://portfolio-strapi3-api.herokuapp.com`,
    //     // queryLimit: 1000, // Defaults to 100
    //     singleTypes: [`global-data`],
    //     // collectionTypes: [`jobs`, `projects`, `tech-stacks`],
    //   },
    // },

    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "GLSTRAPI",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "glstrapi",
        // Url to query from
        // url: "http://localhost:1337/graphql",
        url: "https://portfolio-strapi3-api.herokuapp.com/graphql",
      },
    },

    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
  ],
}
