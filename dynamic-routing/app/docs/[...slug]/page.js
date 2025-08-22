import React from 'react'
import NotFound from './not-found';

const docs = async({params}) => {
    const {slug} = await params;
    
    if(!slug || slug.length === 0) {
        return <div>Page not found</div>;
    }
    if(slug.length == 2) {
        return <div>
            <h1>Category: {slug[0]}</h1>
            <h2>Subcategory: {slug[1]}</h2>
        </div>;
    }
    
    if(slug.length === 1) {
        return <div>
            <h1>Category: {slug[0]}</h1>
        </div>;
    }
        
    
    else if(slug.length > 2) {
        return <NotFound></NotFound>
    }
  return (
    <div>page</div>
  )
}

export default docs; 