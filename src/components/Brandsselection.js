import React from "react"

function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

export default function Brandsselection(props)
{

    const Brands = props?.brands
    console.log("BrandsItemlist")
    console.log(Brands[0].itemList[0])
    const items = [];

    return(
        <>
            <div className="brands">
                <div className="container">
                    <div className="brands__tabs">
                        <ul className="nav nav-tabs" id="brandTabs" role="tablist">                
                            {
                                Brands?.map((Brand, index) => (
                                    <li className="nav-item" role="presentation" key= {Math.random()}>
                                            <button
                                                className={`nav-link fs-4 ${(index === 0)?'active':''}`}
                                                id={`brand-${Brand?.brand?.toLowerCase()}`}
                                                data-bs-toggle="tab"
                                                data-bs-target={`#${Brand?.brand?.toLowerCase()}-brand-pane`}
                                                type="button"
                                                role="tab"
                                                aria-controls={`${Brand?.brand?.toLowerCase()}-brand-pane`}
                                                aria-selected={`${(index === 0)?"true":"false"}`}
                                                tabindex={`${(index === 0)?"-1":"0"}`}
                                            >
                                            {Brand?.brand}
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="tab-content" id="brandTabsContent">                        
                        {   
                            Brands?.map((Brand, brandTabsContentIndex) => (
                                
                                <div className={`tab-pane fade ${(brandTabsContentIndex === 0)?'show active':''}`} id={`${Brand?.brand?.toLowerCase()}-brand-pane`} role="tabpanel"
                                    aria-labelledby={`brand-${Brand?.brand?.toLowerCase()}`} tabIndex="0" key= {Math.random()}>

                                    <div id={`carouselBrand${brandTabsContentIndex}`} className="carousel slide">
                                        <div className="carousel-inner">
                                          
                                            {(items.push(sliceIntoChunks(Brand?.itemList, 4)))}
                                            {
                                              items[0]?.map((item, brandTabsContentIndex) =>(
                                                <div key= {Math.random()} className={`carousel-item ${(brandTabsContentIndex === 0)?'active':''}`} >
                                                    <div className="row" >
                                                      {
                                                          item?.map((child) =>(
                                                          <a key= {Math.random()} href={child?.callToAction} 
                                                            className="col-6 col-sm-4 col-lg-3 text-center">
                                                                <img src={child?.brandLogo?.file?.url} alt="Devore &amp; Johnson"
                                                                    className="img-fluid d-block mx-auto" />
                                                                <span>Shop Now</span>
                                                            </a>
                                                          ))
                                                      }
                                                    </div>                                                    
                                                </div>                                                    
                                              ))                                              
                                            }
                                            {items.length=0}                                         
                                        </div>

                                        <button className="carousel-control-prev" type="button" data-bs-target={`#carouselBrand${brandTabsContentIndex}`}
                                            data-bs-slide="prev"><svg className="icon icon--chevron-left" viewBox="0 0 7.8 12.8"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.1,0h1.2c0.2,0,0.4,0.1,0.5,0.3c0.1,0.2,0.1,0.4-0.1,0.6l-5,5.5l5.1,5.5c0.1,0.2,0.1,0.4,0,0.6 c-0.1,0.2-0.3,0.3-0.5,0.3H6c-0.2,0-0.4-0.1-0.5-0.2L0.1,6.7C0,6.5,0,6.2,0.1,6l5.4-5.9C5.6,0.1,5.8,0,6.1,0z" />
                                            </svg><span className="visually-hidden">Previous</span></button>

                                        <button className="carousel-control-next" type="button" data-bs-target={`#carouselBrand${brandTabsContentIndex}`}
                                            data-bs-slide="next"><svg className="icon icon--chevron-right" viewBox="0 0 7.8 12.8"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.8,12.8H0.6c-0.2,0-0.4-0.1-0.5-0.3S0,12.1,0.2,11.9l5-5.5L0.1,0.9C0,0.7,0,0.5,0.1,0.3S0.4,0,0.6,0h1.2 C2,0,2.2,0.1,2.3,0.2l5.4,5.9c0.2,0.2,0.2,0.5,0,0.7l-5.4,5.9C2.2,12.7,2,12.8,
                                1.8,12.8z" />
                                            </svg><span className="visually-hidden">Next</span></button>
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
