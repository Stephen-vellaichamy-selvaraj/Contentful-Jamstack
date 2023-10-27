import React from 'react'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function RichText(props)
{
    console.log("Richtext")
    console.log(props)

    const Bold = ({ children }) => <span className="bold">{children}</span>
    const Text = ({ children }) => <p className="align-center">{children}</p>    

    const options = {
      renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        // [BLOCKS.EMBEDDED_ASSET]: node => {
        //   return (
        //     <>
        //       <h2>Embedded Asset</h2>
        //       <pre>
        //         <code>{JSON.stringify(node, null, 2)}</code>
        //       </pre>
        //     </>
        //   )
        // },
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const { gatsbyImageData, description } = node.data.target
          console.log("Embedded Asset")
          console.log(gatsbyImageData)
          return (
            <GatsbyImage
              image={getImage(gatsbyImageData)}
              alt={description}
              className="mb-10"
            />
          )
        },    
      },
    }
 
    return(
      <>
        <div className={`content content--${props?.backgroundTheme?.toLowerCase()}`} key= {Math.random()}>
            <div className="container" key= {Math.random()}>
                <div className="row justify-content-between" key= {Math.random()}>
                    <div className="content__main col" key= {Math.random()}>                    
                        <div>{props.details && renderRichText(props.details, options)}</div>                    
                    </div>                    
                </div>
            </div>
        </div>        
      </>
    )
}