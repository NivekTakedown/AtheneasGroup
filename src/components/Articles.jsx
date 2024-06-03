import React from 'react';
import ArticleCarousel from './utils/ArticleCarousel';
import { articles } from './assets/articles.js';



const Articles = () => {


  return (
    <section className="articles" id="articles">
      <div className="container">
        <h2 className="text-primary mb-4">Artículos Empresariales</h2>
        <ArticleCarousel articles={articles} />
      </div>
    </section>
  );
};

export default Articles;