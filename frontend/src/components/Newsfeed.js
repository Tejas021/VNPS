import React from 'react'
import {useState} from 'react'
const Newsfeed = () => {
    const [news, setnews] = useState([])
     const NEWS_API_KEY = "431875542c7b4906933b51667c9742cc";
    
     const getBitcoinArticles = async () => {
        try {
          const response = await fetch(
            `https://newsapi.org/v2/everything?q=corona&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
          );
          const json = await response.json();
          console.log(json);
          setnews(json.articles)
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div>
            {/* {console.log(getBitcoinArticles)} */}
            {/* <button className="btn btn-primary" onClick={getBitcoinArticles}>NEws</button> */}
            <h3>News Feed</h3>
            {getBitcoinArticles}
            <div classname="container">
                <div className='row'>
            {news.map(article=>
                <div className="col-md-4 border border-success">
                    
                <h5>{article.title}</h5><h6>{article.description}</h6>      
            </div>
            )}
            
             </div>
            </div>
        </div>
    )
}

export default Newsfeed
