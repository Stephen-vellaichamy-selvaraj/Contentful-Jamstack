import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/project-details.module.css'
import { graphql } from 'gatsby'

const ProductDetails = ({ data }) => {
  const { name,imageUrls,productOverview,featuresAndBenefits } = data.ReeceAPI.product
  return (
    <Layout>
      <div className={styles.details}>
        <h4>Name: {name}</h4><br />
        <img src={imageUrls?.large}></img><br />
        <h4>Product Overview: </h4>
        {
            productOverview?.split(";").map(function(item, idx) {
                return (
                    <span key={idx}>
                      <ul><li><p>{item}</p></li></ul>                        
                      </span>
                )
            })
          }
                  
        <br /><p><b>Features And Benefits:</b> {featuresAndBenefits}</p>
      </div>
    </Layout>
  )
}
 
export default ProductDetails

export const query = graphql`
    query MyQuery($id: String!) {
        ReeceAPI {
            product(productInput: {productId: $id}) {
                id
                name
                manufacturerName
                imageUrls {
                    large
                }
                productOverview
                featuresAndBenefits                
            }
        }
    }`