import React from "react";
import { useState, useEffect } from "react";
const Newsfeed = () => {
  useEffect(() => {
    const getBitcoinArticles = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=corona&language=en&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
        );
        const json = await response.json();
        console.log(json);
        setnews(json.articles);
      } catch (error) {
        console.log(error);
      }
    };
    getBitcoinArticles();
  }, []);

  const [news, setnews] = useState([]);
  const NEWS_API_KEY = "431875542c7b4906933b51667c9742cc";

  const getBitcoinArticles = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=corona&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
      );
      const json = await response.json();
      console.log(json);
      setnews(json.articles);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* {console.log(getBitcoinArticles)} */}
      {/* <button className="btn btn-primary" onClick={getBitcoinArticles}>NEws</button> */}
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://apexgroupofhospitals.com/wp-content/uploads/emergency_banner.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
      <h3 className="mt-5 text-start">News Feed:</h3>
      {getBitcoinArticles}

      <div className="mt-3 container">
        <div className="row">
          {news.map((article) => (
            <div key={article.id} className="col-md-4 border border-success">
              <h5
                className="text-warning"
                onClick={(e) => (window.location.href = `${article.url}`)}
              >
                {article.title}
              </h5>
              <h6>{article.description}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
