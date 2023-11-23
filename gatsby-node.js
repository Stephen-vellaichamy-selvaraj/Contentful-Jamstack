const path = require(`path`)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.createPages = async ({ graphql, actions }) => {   
  
    //Redirects
    const { createRedirect } = actions
    createRedirect({ 
      fromPath: `/register/`, 
      toPath: `https://about.google/stories/`
    })

    //Contentful landing page Pages
    const cfLandingPagesCollection  = await graphql(`query MyLayoutQuery {
      allContentfulLandingPage {
        nodes {
          slug
          }      
        }
      }
    `).then(result => {
      result.data.allContentfulLandingPage.nodes.forEach(node => {
        actions.createPage({
          path: `${node.slug}`,
          component: path.resolve('./src/templates/generic-page.js'),
          context: { slug: node.slug },
        }); 
      });               
    })

    // Contentful brands Pages
    const contenfulCollection  = await graphql(`
    query BrandPage {
      allContentfulPageBrands {
        nodes {
          brandsSelection {
            slug
          }
        }
      }
    }
    `).then(result => {
      result.data.allContentfulPageBrands.nodes[0].brandsSelection.forEach(node => {
        actions.createPage({
          path: `/brands/${node.slug}`,
          component: path.resolve('./src/templates/brand-details.js'),
          context: { slug: node.slug },
        }); 
      });               
    })

    //Contentful NewsArticle Pages
    const contenfulNewsCollection  = await graphql(`
      query MyNewArticleQuery {
        allContentfulNewsArticle {
          nodes {
            slug
          }
        }
      }
    `).then(result => {
      result.data.allContentfulNewsArticle.nodes.forEach(node => {
        actions.createPage({
          path: `/news/${node.slug}`,
          component: path.resolve('./src/templates/news-article-page.js'),
          context: { slug: node.slug },
        }); 
      });               
    })        

    //Product service static pages
    const productcollection = await graphql(`query MyQuery {
          ReeceAPI {
            searchProduct(
              productSearch: {searchTerm: "valves", page: 1, size: 24, categoryLevel: 0, categories: [], filters: [], engine: "plumbing_hvac"}
              userId: ""
              shipToAccountId: ""
            ) {
              products {
                id
              }
            }
          }
        }
      `).then(result => {
      result.data.ReeceAPI.searchProduct.products.forEach(node => {
          actions.createPage({
          path: `/products/${node.id}`,
          component: path.resolve('./src/templates/product-detail-page.js'),
          context: { id: node.id }
        }); 
      });               
    }) 

    return Promise.all([cfLandingPagesCollection, contenfulCollection, contenfulNewsCollection, productcollection])
    //return Promise.all([cfLandingPagesCollection, productcollection])
  }