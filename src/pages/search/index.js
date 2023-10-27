import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../../components/Layout"
import * as styles from '../../styles/brands.module.css'
// import { StaticImage } from "gatsby-plugin-remote-images"

const products = ({data}) => {
    //console.log(data)
    const products = data.ReeceAPI.searchProduct.products

    return (
        <Layout>
            <div className={styles.brands}>

                <div className={styles.brand}>
                    {
                        products.map ( product => (
                            <Link to = { "/products/" + product.id} key= {Math.random()}>
                                <div>
                                    {/* <StaticImage src={product.imageUrls?.large} placeholder="blurred" alt="A Dog Image"
                                        width={600}
                                        height={600}
                                    /> */}
                                    <img src={product.imageUrls?.large} width="100" height="110"/>

                                    <h3>{product.name}</h3>
                                    <h4>{product.manufacturerName}</h4>
                                    <h5>{product.manufacturerNumber}</h5>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}
export default products

export const query = graphql`query MyQuery {
  ReeceAPI {
    searchProduct(
      productSearch: {searchTerm: "valves", page: 1, size: 24, categoryLevel: 0, categories: [], filters: [], engine: "plumbing_hvac"}
      userId: ""
      shipToAccountId: ""
    ) {
      products {
        name
        id
        partNumber
        price
        imageUrls {
          small
          large
        }
        manufacturerName
        manufacturerNumber
      }
    }
  }
}`