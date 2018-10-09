import React from 'react';
import data from './data';
import './style.scss';

const NewsCards = () => (
  <section className="News-section">
    <h2 className="News-title">noticias</h2>
    <div className="News-container">
      {data.map(item => (
        <article key={item.id} className="News-item">
          <h2 className="News-name">{item.title}</h2>
          <div className="News-separation"></div>
          <p className="News-text">{item.content}</p>
          <p className="News-date">{item.date}</p>
        </article>
      ))}
    </div>
  </section>
);

export default NewsCards;
