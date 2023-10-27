import React from "react";

export default function Spotlight(props)
{

    return(
        <div className="spotlight">
        <div className="container">
          <div className="row justify-content-between">
            {
                props.spotlightCard?.map((Spotlight, index) => (
                    <div className="spotlight__card spotlight__card--shade col-xs-12 col-lg-4" key= {Math.random()}>
                      <div className="spotlight__content">
                          <div className="spotlight__copy">
                          <h2>
                              <div                               
                              dangerouslySetInnerHTML={{ __html: Spotlight?.title}} />                                
                          </h2>
                          <p>{Spotlight.description?.description}</p>
                          <div 
                              dangerouslySetInnerHTML={{ __html: Spotlight?.callToAction}} /> 
                          </div>
                          <img
                            src={Spotlight.image?.url}
                            alt="fittings"
                            className="spotlight__image"
                          />
                      </div>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
  
    )
}