import React from "react"

export default function Divisioncards(props)
{
    console.log("Divisioncards")
    console.log(props)
    const Cards = props?.sections
    return(
        <>
            <div className="divisions">
                <div className="container">
                    <h2>{props?.divcardtitle.title}</h2>
                    <p>{props?.description?.description}
                    </p>
                    <div className="row justify-content-between">
                    {
                        Cards?.map((Card, index) => (
                            <div className="divisions__card col-xs-12 col-sm-6 col-lg-3" key= {Math.random()}>
                                <div className="divisions__content rounded" key= {Math.random()}>
                                <img
                                    src={Card?.image?.url}
                                    alt="fittings"
                                    className="img-fluid"
                                />
                                <div className="divisions__copy">
                                    <h3>{Card?.title}</h3>
                                    <p>{Card?.description?.description}
                                    </p>
                                    <div 
                                        dangerouslySetInnerHTML={{ __html: Card?.callToAction}} />
                                </div>
                                </div>
                            </div>
                        ))  
                    }
                    </div>
                </div>
            </div>
        </>
    )
}
