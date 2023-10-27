import React from "react";

export default function Phone(props)
{

    const title = props?.title;
    const description = props?.description;
    const image = props?.image;
    const phoneItems = props?.phoneItems; 
    
    return(
        <div className="phone">
          <div className="container">
            <div className="row">
                <h2>{title}</h2>
                <p>{description?.description}</p>
            </div>
            <div className="row align-items-center justify-content-between">
                <div className="col-xs-12 col-lg-5">
                <img
                    src={image.url}
                    alt="'Easy to Use' screen shot"
                    className="phone__image d-block img-fluid mx-auto"
                />
                </div>
                <div className="col-xs-12 col-lg-7">
                    <ul className="phone__list">
                        {
                            phoneItems.map((item, index) => (
                                <li
                                className="phone__item"
                                tabIndex={-1}
                                data-image={item.image?.url} key= {Math.random()}
                                >
                                <img
                                    src={item.image?.url}
                                    alt=""
                                    aria-hidden="true"
                                />
                                <h3 className="fs-5">{item?.title}</h3>
                                <p>{item.captionText?.captionText}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
          </div>
        </div>        
    )
}

