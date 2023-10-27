import React from "react"

export default function GlobalScripts(props)
{   
    console.log('Global script data')
    console.log(props)   
    return(
        <>
            <div
                    key={`head`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.globalHeadScripts?.globalHeadScripts }}
                />
            <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.globalBodyScripts?.globalBodyScripts }}
            />         
        </>
    );
}
