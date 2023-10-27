import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from 'gatsby'

const NewsArticles = ({ data }) => {
  
  const { newsTitle,subTitle,description,image,imageDescription,updatedAt } = data.allContentfulNewsArticle?.nodes[0]

  return (
    <Layout>
      <>
        <div className="article-nav">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <ul className="article-nav__links col">
                <li>
                <Link to={'..'}>
                    <svg
                      className="icon icon--chevron-left"
                      viewBox="0 0 7.8 12.8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.1,0h1.2c0.2,0,0.4,0.1,0.5,0.3c0.1,0.2,0.1,0.4-0.1,0.6l-5,5.5l5.1,5.5c0.1,0.2,0.1,0.4,0,0.6 c-0.1,0.2-0.3,0.3-0.5,0.3H6c-0.2,0-0.4-0.1-0.5-0.2L0.1,6.7C0,6.5,0,6.2,0.1,6l5.4-5.9C5.6,0.1,5.8,0,6.1,0z" />
                    </svg>
                    <span>Go Back</span>
                  </Link>
                </li>
              </ul>
              <ul className="article-nav__social col">
                <li>
                  <a href="#" target="_blank">
                    <svg
                      className="icon icon--linkedin"
                      viewBox="0 0 29 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.17343 9.2642H6.68766V27.5715H1.17343V9.2642ZM3.82026 0.000282827C4.28535 -0.00564262 4.74692 0.0815935 5.17777 0.25685C5.60862 0.432106 6.00002 0.691836 6.32892 1.02073C6.65782 1.34963 6.91755 1.74103 7.0928 2.17188C7.26806 2.60273 7.35529 3.0643 7.34937 3.52939C7.34937 5.29395 5.80538 6.83793 3.82026 6.83793C2.94947 6.81667 2.12023 6.46127 1.50431 5.84535C0.888383 5.22942 0.532981 4.40018 0.511719 3.52939C0.511719 1.54427 2.0557 0.000282827 3.82026 0.000282827ZM15.9516 18.7487V27.5715H10.4373V9.2642H15.731V11.6905C16.6133 11.4699 17.275 8.82306 21.2452 8.82306C28.0829 8.82306 28.0829 14.1167 28.0829 19.1898V27.5715H22.5687V17.6458C22.5687 15.2196 21.6864 13.8962 19.2601 13.8962C16.6133 13.8962 15.9516 16.3224 15.9516 18.7487Z"
                      />
                    </svg>
                    <span className="visually-hidden">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content ">
          <div className="container">
            <div className="row justify-content-between">
              <div className="content__main col-xs-12 col-lg-7">
                <h1>{newsTitle && newsTitle.newsTitle}</h1>
                <h2 className="fs-4">{subTitle && subTitle.subTitle}</h2>
                <p className="fs-5">{updatedAt && updatedAt}</p>
                <p dangerouslySetInnerHTML={description && { __html: description?.description}} ></p>
              </div>
              <div className="content__sidebar col-xs-12 col-lg-4">
                <img
                  src={image && image.url}
                  className="img-fluid rounded mx-auto mb-3 d-block"
                  width={424}
                  height={415}
                />
                <p dangerouslySetInnerHTML={imageDescription && { __html: imageDescription?.imageDescription}}>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>       
    </Layout>
  )
}
 
export default NewsArticles

export const query = graphql`query NewsArticleQry($slug: String!) {
  allContentfulNewsArticle(filter: {slug: {eq: $slug}}) {
    nodes {
      slug
      newsTitle {
        newsTitle
      }
      subTitle {
        subTitle
      }
      description {
        description
      }
      imageDescription {
        imageDescription
      }
      image {
        url
      }      
      updatedAt(formatString: "MM/DD/YY HH:MM" )
    }
  }
}`