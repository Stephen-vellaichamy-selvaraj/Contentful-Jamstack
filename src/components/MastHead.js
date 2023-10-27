import React from 'react'
export default function MastHead(props)
{
    return(
        <div className="masthead">
        <div className="container">
            <div className="row">
            <div className="masthead__content col-xs-12 col-md-6">
                <h1>{props && props.title}</h1>
                <p>{props && props.subTitle}</p>
                <a href={props && props.callToAction} className="btn btn--dark">
                Learn More
                </a>
            </div>
            </div>
        </div>
        <picture className="masthead__image">
            <source srcSet={props && props.backgroundImage.url} media="(min-width: 960px)" />
            <img
            src={props && props.backgroundImage.url}
            alt="two men joking around and laughing"
            />
        </picture>
        </div>
    )
}