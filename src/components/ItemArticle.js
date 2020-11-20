import React from 'react';

const ItemArticle = ({article}) => {
    return (
        <article className={`${article.type} ${(article.image ? 'with-image' : '')}`}>
            <a href={article.url} title={article.title}>
                <img src={article.image} alt={article.title} />
                <h1>
                    <em>{article.overline}. </em>
                    {article.title}
                </h1>
                <p>{article.paragraph}</p>
                {article.author && 
                    <b><span>Por </span>{article.author}</b>
                }
            </a>
        </article>
    )
}

export default ItemArticle;