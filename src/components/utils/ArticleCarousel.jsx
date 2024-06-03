import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ArticleCarousel = ({ articles }) => {
  return (
    <Carousel>
      {articles.map((article) => (
        <Carousel.Item key={article.id}>
          <img
            className="d-block w-100"
            src={article.imageUrl}
            alt={`Imagen del artículo ${article.title}`}
          />
          <Carousel.Caption>
            <h3>{article.title}</h3>
            <p>{article.shortDescription}</p>
            <Link to={`/article/${article.id}`} className="btn btn-primary">
              Leer más
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ArticleCarousel;