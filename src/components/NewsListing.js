import React, { useState } from "react";
import useContentful from '../hooks/use-contentful.js';
import { useStaticQuery, graphql } from "gatsby"
import moment from 'moment';

export const useCategory = () => {
    const article = useStaticQuery(graphql`
            query uniqueCategories {
                allContentfulNewsArticle {                    
                    distinct(field: {category: SELECT})
                }
            }
        `
    )

    return article.allContentfulNewsArticle
}

export default function NewsListing(){

    let [isCategory, setIsCategory] = useState(null)
    let [isPageNumber, setisPageNumber] = useState(null)

    //Pagination and Category starts
    console.log("Category") 
    const Categories = useCategory()
    console.log(Categories.distinct)    

    console.log("selected PageNum")
    console.log(isPageNumber);   

    const query =`query($category: String, $pageskip: Int){
        newsArticleCollection
        (where: {category_contains : $category},
            order: sys_publishedAt_ASC, skip: $pageskip, limit: 8){
            total
            items{
                newsTitle
                category
                slug
                dateTime
            }
        }
      }`;

    let {data, errors} = useContentful(query, isCategory, isPageNumber);
  
    if(errors) 
      return (
        <span style={{color: "red"}}>      
          {errors.map((error) => error.message).join(",")}      
        </span>
      );    

    if (!data) return <span>Loading...</span>

    console.log("New Article Data")
    console.log(data && data.newsArticleCollection)

    const newsList = data.newsArticleCollection.items

    const TotalRecordsPerPage = 8;
    const totalRecs = data && data.newsArticleCollection.total
    console.log("RecordsCategory: " + totalRecs)
    const TotNumberOfPages = Math.ceil(totalRecs/TotalRecordsPerPage)
    console.log("TotNumberOfPages : " + TotNumberOfPages);
    const getTotNumberOfPages = TotNumberOfPages => {
        let content = [];
        for (let i=0; i < TotNumberOfPages; i++) {
          content.push(
            <button 
                onClick={() => setisPageNumber(i*TotalRecordsPerPage)} 
                key= {Math.random()}>{i+1}
            </button>);
        }
        return content;
    };      

    return(
        <div className="news-results">
            <div className="container">
                <div className="news-nav">
                    <div className="row align-items-center justify-content-between">
                        <div className="dropdown col-xs-12 col-sm-6">
                            <div className="dropdown-menu" style={{}}>
                                <button className="dropdown-item" onClick={() => setIsCategory("")}>All</button>
                                {                                    
                                    Categories.distinct && Categories.distinct?.map((category) =>(
                                        <button className="dropdown-item" onClick={() => (setIsCategory(category), setisPageNumber(null))} key= {Math.random()}>{category}</button>
                                    ))
                                }
                            </div>
                        <button
                            className="dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Sort by Topic
                            <svg
                            className="icon icon--chevron-down"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12.8 7.8"
                            >
                            <path d="M0,1.8V0.6c0-0.2,0.1-0.4,0.3-0.5S0.7,0,0.9,0.2l5.5,5l5.5-5.1c0.2-0.1,0.4-0.1,0.6,0c0.2,0.1,0.3,0.3,0.3,0.5 v1.3c0,0.2-0.1,0.4-0.2,0.5L6.7,7.8C6.5,7.9,6.2,7.9,6,7.8L0.1,2.4C0.1,2.3,0,2.1,0,1.8z" />
                            </svg>
                        </button>
                        </div>
                        <ul className="news-nav__social col-xs-12 col-sm-6">
                        <li>
                            <a href="#" target="_blank">
                            <svg
                                className="icon icon--linkedin"
                                viewBox="0 0 29 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.17343 9.2642H6.68766V27.5715H1.17343V9.2642ZM3.82026 0.000282827C4.28535 -0.00564262 4.74692 0.0815935 5.17777 0.25685C5.60862 0.432106 6.00002 0.691836 6.32892 1.02073C6.65782 1.34963 6.91755 1.74103 7.0928 2.17188C7.26806 2.60273 7.35529 3.0643 7.34937 3.52939C7.34937 5.29395 5.80538 6.83793 3.82026 6.83793C2.94947 6.81667 2.12023 6.46127 1.50431 5.84535C0.888383 5.22942 0.532981 4.40018 0.511719 3.52939C0.511719 1.54427 2.0557 0.000282827 3.82026 0.000282827ZM15.9516 18.7487V27.5715H10.4373V9.2642H15.731V11.6905C16.6133 11.4699 17.275 8.82306 21.2452 8.82306C28.0829 8.82306 28.0829 14.1167 28.0829 19.1898V27.5715H22.5687V17.6458C22.5687 15.2196 21.6864 13.8962 19.2601 13.8962C16.6133 13.8962 15.9516 16.3224 15.9516 18.7487Z"
                                />
                            </svg>
                            <span className="visually-hidden">LinkedIn</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="news-results__items row">
                    {
                        newsList && newsList?.map((newsArticle, index ) => (
                            <div className="news-card col-xs-12 col-md-6" key= {Math.random()}>
                                <div className="news-card__content">
                                <h2 className="fs-4">
                                    {newsArticle.newsTitle}
                                </h2>
                                <p className="fs-5">{moment(newsArticle?.dateTime).format('mm/DD/YYYY, h:mm a')}</p>
                                <a href={newsArticle?.slug}>Read More</a>
                                <span className={`news-card__tag news-card__tag--${newsArticle?.category?.toLowerCase().replace('bath+kitchen', 'bath')}`}>{newsArticle?.category}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="pagination">
                    <div className="row justify-content-center">
                        <ul className="pagination__links col">
                        <li>

                            <button {...(isPageNumber >= TotalRecordsPerPage)? console.log('Previoud Button enabled: '+ (isPageNumber + TotalRecordsPerPage)) : {disabled:true}} 
                                onClick={() => setisPageNumber( isPageNumber - TotalRecordsPerPage )}>
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

                        </li>
                            {TotNumberOfPages && getTotNumberOfPages(TotNumberOfPages)}                      
                        <li>
                            <button {...(isPageNumber + TotalRecordsPerPage) < totalRecs? console.log('Button enabled: '+ (isPageNumber + TotalRecordsPerPage)) : {disabled:true}} 
                                onClick={() => setisPageNumber( isPageNumber+TotalRecordsPerPage )}>
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
                        </li>
                        </ul>
                        <div className="pagination__count">{(isPageNumber + TotalRecordsPerPage)/TotalRecordsPerPage} of {totalRecs}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

