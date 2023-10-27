import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../../components/Layout"
import * as styles from '../../styles/brands.module.css'
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Brands = ({data}) => {
    //console.log(data.allContentfulPageBrands.nodes[0].brandsSelection)
    const title = data.allContentfulPageBrands.nodes[0].title
    const brands = data.allContentfulPageBrands.nodes[0].brandsSelection

    return (
        <Layout>
            <div className={styles.brands}>
                <h2>{ title }</h2>
                <div className={styles.brand}>
                    {
                        brands.map ( brand => (
                            <Link to = { "/brands/" + brand.slug} key= {Math.random()}>
                                <div>
                                    {
                                        // <GatsbyImage image={getImage(brand.thumb)} 
                                        // alt="blog image" />    
                                        
                                        <img
                                        src={brand && brand.thumb.url}
                                        alt="two men joking around and laughing"
                                      />                                         
                                    }
                                    <h3>{brand.title}</h3>
                                    <p>{brand.description.description}</p>                                    
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}
export default Brands

export const query = graphql`
query BrandsPage {
    allContentfulPageBrands {
        nodes {
          title
          brandsSelection {
            title
            slug
            description {
              description
            }
            thumb {
                url
              }
          }
        }
    }
}`