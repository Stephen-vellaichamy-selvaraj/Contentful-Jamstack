import React from "react"
//import { GatsbyImage, getImage } from "gatsby-plugin-im6age"
import Layout from "../components/Layout"
import * as styles from '../styles/brand-details.module.css'
import { graphql } from 'gatsby'

const BrandDetails = ({ data }) => {
  //console.log(data);
   const { html  } = data.allContentfulAssemblyBrands
   const { title,description,featuredImage } = data.allContentfulAssemblyBrands.nodes[0].brand
   const image = data.allContentfulAssemblyBrands.nodes[0].brand.featuredImage;
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{description.description}</h3>
        <div className={styles.featured}>
          {/* <GatsbyImage image={image} alt="blog image" layout="fluid" width={1000} height={1000}/> */}
          <img
            src={image && image.url}
            alt="two men joking around and laughing"
          />          
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}
 
export default BrandDetails

export const query = graphql`
query TopicBrand($slug: String!) {
  allContentfulAssemblyBrands(filter: {slug: {eq: $slug}}) {
    nodes {
      slug
      brand {
        title
        description {
          description
        }
        featuredImage {
          url
        }
      }      
    }
  }
}`