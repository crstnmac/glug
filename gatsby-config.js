module.exports = {
  siteMetadata: {
    title: `Glug Infinite`,
    description: `FOSS Club`,
    author: `@github:crstnmac`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        plugins: [
          `gatsby-remark-reading-time`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1080,
            },
          },
          // ...
        ],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Glug-Infinite`,
        short_name: `Glug-Infinite`,
        start_url: `/`,
        background_color: `#1B1E46`,
        theme_color: `#1B1E46`,
        display: `standalone`,
        icon: `src/images/glug-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
  ],
}
