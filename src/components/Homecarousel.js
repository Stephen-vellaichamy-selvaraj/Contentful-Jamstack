import React,{useState} from "react";
import * as styles from '../styles/main.css'
import SignIn from "./SignIn";

export default function Homecarousel(props)
{
  const Carousels = props?.imageSelection
  let [PageNumber, setisPageNumber] = useState(1)
  console.log("CarouselsLengh: " + Carousels?.length)
  console.log("testing")
  
  let showButton = null;
  showButton = Carousels && Carousels.length === 1? null : 1

  return(
      <div className="home-carousel">
        <div id="homeCarousel" className="carousel slide">
          <div className="carousel-inner">
            {
              Carousels?.map((Carousel, index) => (
                <div className={index > 0 ? "carousel-item" : "carousel-item active"} key= {Math.random()}>
                  <div className="masthead">
                    <div className="container">
                      <div className="row">
                        <div className="masthead__content col-xs-12 col-md-6">
                          <h1>{Carousel?.title}</h1>
                          <p>
                              {Carousel?.captionText?.captionText}
                          </p>
                          <div 
                              dangerouslySetInnerHTML={{ __html: Carousel?.callToAction}} />
                        </div>
                      </div>
                    </div>
                    <picture className="masthead__image">
                    <source srcSet={Carousel?.image?.url} media="(min-width: 960px)" />
                    <img src={Carousel?.image?.url} alt="assorted fillings" />
                    </picture>                  
                  </div>{" "}
                </div>
              ))            
            }
          </div>

          {showButton && <div className="home-carousel__controls">
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide="prev"
            >
              <svg
                className="icon icon--chevron-left"
                viewBox="0 0 7.8 12.8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.1,0h1.2c0.2,0,0.4,0.1,0.5,0.3c0.1,0.2,0.1,0.4-0.1,0.6l-5,5.5l5.1,5.5c0.1,0.2,0.1,0.4,0,0.6 c-0.1,0.2-0.3,0.3-0.5,0.3H6c-0.2,0-0.4-0.1-0.5-0.2L0.1,6.7C0,6.5,0,6.2,0.1,6l5.4-5.9C5.6,0.1,5.8,0,6.1,0z" />
              </svg>
              <span className="visually-hidden">Previous</span>
            </button>
            <span>{PageNumber}/{Carousels?.length}</span>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide="next"              
            >
              <svg
                className="icon icon--chevron-right"
                viewBox="0 0 7.8 12.8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.8,12.8H0.6c-0.2,0-0.4-0.1-0.5-0.3S0,12.1,0.2,11.9l5-5.5L0.1,0.9C0,0.7,0,0.5,0.1,0.3S0.4,0,0.6,0h1.2 C2,0,2.2,0.1,2.3,0.2l5.4,5.9c0.2,0.2,0.2,0.5,0,0.7l-5.4,5.9C2.2,12.7,2,12.8,1.8,12.8z" />
              </svg>
              <span className="visually-hidden">Next</span>
            </button>
          </div>}
        </div>
        <SignIn {...props} />
      </div>
  )
}

