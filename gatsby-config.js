require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://reece-gatsby-portal.netlify.app`, 
  },
  headers: [
    {
      source: `*`,
      headers: [
        {
          key: `Content-Security-Policy`,
          value: `frame-ancestors https://iframetester.com/` 
        }
      ]
    }
  ],  
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment:process.env.CONTENTFUL_ENVIRONMENT,
        host: process.env.CONTENTFUL_HOST,        
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain the remote schema Query type
        typeName: "AWSAppSync",
        // This is the field under which it's accessible
        fieldName: "ReeceAPI",
        // URL to query from        
        // url: "https://api.reece.com",
        // headers: {
        //   "x-max-api-secret":"1upRhSWC1B"
        // }
        url: "http://api.external-dev.reecedev.us/",
        headers: {
          "x-max-api-secret":"DFhdhdTolx"
        }             
      },
    },    
  ] 
}