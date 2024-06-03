import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import 'katex/dist/katex.min.css'; // Importa los estilos de KaTeX
import { articles } from '../assets/articles';
import SubscribeSection from './SubscribeSection';

const ArticleDetails = () => {
  const { id } = useParams();
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    // Ordena los artículos de tal manera que el artículo con el ID que se recibió esté primero
    const sortedArticles = articles.sort((a, b) => (a.id === Number(id) ? -1 : b.id === Number(id) ? 1 : 0));

    // Actualiza el estado con los artículos ordenados
    setAllArticles(sortedArticles);
  }, [id]);

  return (
    <section className="article-details">
      <div className="container">
        {allArticles.map((article) => (
          <div className="row" key={article.id}>
            <div className="col-md-8 offset-md-2">
              <h2 className="article-title">{article.title}</h2>
              <img src={article.imageUrl} alt={`Imagen del artículo ${article.title}`} />
              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{article.excerpt}</ReactMarkdown>
              <SubscribeSection />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleDetails;