/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Diego Motta",
    description: "Este sitio web muestra mis experiencias y proyectos trabajando como desarrollador fullstack web",
    author: "Diego Motta",
    twitterUsername: "",
    image: "",//"/twitter-img.png",
    siteUrl: "https://diegomotta.com.ar",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-YLV22FF9LL", // Google Analytics / GA
        ],
    }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`,`projects`,`freelances`], //`blogs`
        singleTypes:[`about`],
      },
    },
  ],
}
