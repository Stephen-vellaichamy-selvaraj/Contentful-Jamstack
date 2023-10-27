import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import SwitchComponents from '../components/SwitchComponents'

// Home Page add
export default function Home({data}) {

  console.log("Sections");
  const Sections = data.allContentfulLandingPage.nodes[0]?.sections
  console.log(Sections);
  if (!Sections){
    return null;
  }
  
  return (
    <>
      <Layout>
        {
          Sections && Sections.map((section, index) => {

              if (!section) {
                return null
              }            

              const Switcher = SwitchComponents[section.__typename];
              if (!Switcher) {
                console.log("Switcher not found :" + section.__typename);
                return null
              }
              else{
                console.log(section.__typename)      
                //console.log("Switcher Name :" + Switcher);

                return (
                  <Switcher
                    key={section.__typename} // or something unique
                    {...section}
                  />
                );
              }
          })
        }
        <div dangerouslySetInnerHTML={{ __html: data.allContentfulLandingPage.nodes[0]?.bodySectionScripts?.bodySectionScripts}}></div>
        <div dangerouslySetInnerHTML={{ __html: Sections[0]?.globalBodySectionScripts?.globalBodySectionScripts}}></div>
      </Layout>    
    </>
  )
}

//SEO
export const Head = (data) => {

  const SeoData = data?.data?.allContentfulLandingPage?.nodes[0]?.seoMetadata
  console.log("Data")
  console.log(data);  
  console.log("SEO Meta Data")
  console.log(SeoData);
  const Sections = data?.allContentfulLandingPage?.nodes[0]?.sections
  console.log(Sections);
  
  if (!Sections){
    return null;
  }  

  return(
    <>
      <title>{SeoData?.pageTitle}</title>
      <meta name="description" content={SeoData?.metaDescription?.metaDescription} />
      <div dangerouslySetInnerHTML={{ __html: data?.data?.allContentfulLandingPage?.nodes[0]?.headSectionScripts?.headSectionScripts}}></div>
      <div dangerouslySetInnerHTML={{ __html: data?.data?.allContentfulLandingPage?.nodes[0]?.sections[0]?.globalHeadSectionScripts?.globalHeadSectionScripts}}></div>
    </>     
  )
}

export const query = graphql`query MyLayoutQuery {
  allContentfulLandingPage(filter: {slug: {eq: "home-page"}}) {
    nodes {
      title
      slug
      seoMetadata {
        pageTitle
        metaDescription{
          metaDescription
        }
      }
      headSectionScripts {
        headSectionScripts
      }
      bodySectionScripts {
        bodySectionScripts
      }
      sections {
        ... on ContentfulGlobalPageScripts {
          id
          __typename
          globalHeadSectionScripts {
            globalHeadSectionScripts
          }
          globalBodySectionScripts {
            globalBodySectionScripts
          }
        }
        ... on ContentfulImageCarousel {
          id
          __typename
          name
          showSignIn
          imageSelection {
            image {
              url
            }
            title
            callToAction
            captionText {
              captionText
              id
            }
          }
        }
        ... on ContentfulPhone {
          id
          __typename
          description {
            description
          }
          image {
            url
          }
          phoneItems {
            title
            captionText {
              captionText
            }
            image {
              url
            }
          }
        }
        ... on ContentfulSpotlight {
          id
          __typename
          spotlightCard {
            title
            callToAction
            image {
              url
            }
            description {
              description
            }
          }
        }
        ... on ContentfulVideo {
          id
          __typename
          callToAction
          videoPath {
            videoPath
          }

          description {
            description
          }
          posterImage {
            file {
              url
            }
          }
        }
        ... on ContentfulRichTextContent {
          id
          __typename
          backgroundTheme
          details{
            raw        
          }
        }
        ... on ContentfulDivisionsCard {
          id
          __typename
					divcardtitle: title{title}
          description {
            description
          }
          sections {
            sectiontitle:title
            description {
              description
            }
            callToAction
            image {
              url
            }
          }
        }
        ... on ContentfulBrandsSelection {
          id
          __typename
          brands {
            brand
            itemList {              
              brandLogo {
                file {
                  url
                }
              }
              callToAction
            }
          }
        }
        ... on ContentfulNewsListing {
          id
          __typename
          title
          linkedInTarget
        }
        ... on ContentfulMastHead{
          id
          __typename
          title
          subTitle
          backgroundImage{url}
          callToAction
        }
        }
      }
    }
}`