
import React from "react";
console.log("test")

export default function Video(props)
{
    return(
        <div className="video">
        <div className="container">
            <div className="row align-items-center justify-content-between">
            <div className="col-xs-12 col-lg-7">
                <div className="video__thumbnail rounded">
                <img src={props.posterImage.file?.url} alt="" />
                <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#videoModal"
                >
                    <svg
                    viewBox="0 0 23 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M21.16 10.0738C21.16 10.0755 21.1581 10.0766 21.1566 10.0757L4.60483 0.514121C2.84499 -0.505149 0.647217 0.768934 0.647217 2.79951V21.9188C0.647217 23.9494 2.84499 25.2155 4.60483 24.2042L21.16 14.6406C22.9187 13.622 22.9199 11.0924 21.1635 10.0718C21.162 10.0709 21.16 10.072 21.16 10.0738Z"
                        fill="#003057"
                    />
                    </svg>
                    <span className="visually-hidden">
                    Open Video in Modal Window
                    </span>
                </button>
                </div>
            </div>
            <div className="video__content col-xs-12 col-lg-5">
                <h2>{props.title?.title}</h2>
                <p>{props.description?.description}</p>          
                <div dangerouslySetInnerHTML={{ __html: props?.callToAction}} />
            </div>
            </div>
        </div>
        <div
            className="video__modal modal fade"
            id="videoModal"
            data-video="WNx4jUDgNTo"
        >
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <button type="button" data-bs-dismiss="modal">
                <svg
                    className="icon icon--close"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                >
                    <path d="M0.727 27.879l27.153-27.153 3.394 3.394-27.153 27.153z" />
                    <path d="M4.121 0.727l27.153 27.153-3.394 3.394-27.153-27.153z" />
                </svg>
                <span className="visually-hidden">Close</span>
                </button>
            </div>
            </div>
        </div>
        </div>
   )
}