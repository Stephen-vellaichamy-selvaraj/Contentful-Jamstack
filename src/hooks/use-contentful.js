import {useState, useEffect} from 'react';

function useContentful(query, isCategory, isPageNumber){

    let [data, setData] = useState(null)
    let [errors, setErrors] = useState(null)

    useEffect(() => {
      console.log("Use effect run")
      console.log("isCategory: " + isCategory)
      console.log("isPageNumber: " + isPageNumber)
      console.log(query)
      console.log("CONTENTFUL_SPACE_ID: " + process.env.CONTENTFUL_SPACE_ID)

      window.fetch(
        `https://graphql.contentful.com/content/v1/spaces/007inbhlnus1/environments/master`, 
        {
          method: "POST",
          headers:{
            'Content-Type':"application/json",
            Authorization: `Bearer 7wMQgKx3LGaqtmfhZei2xRPACLr2iQHpNs4dNkv_9B4`
          },
          body: JSON.stringify({ query, variables:{"category": isCategory, "pageskip": isPageNumber}}),
        }
      )
      .then ((response) => response.json())      
      .then (({ data, errors }) => {
        if (errors) setErrors(errors);
        if (data) setData(data);
      })
      .catch ((error) => setErrors([error]));
    },[query, isCategory, isPageNumber]);
    
    return {data, errors};
}

export default useContentful