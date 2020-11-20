import React from 'react';
import useFilterData from '../hooks/useFilterData';

import ItemArticle from './ItemArticle';

const Apertura = () => {

    const { getFilter, getFilteredArticles } = useFilterData();

    const filter = getFilter();
    const filteredArticles = getFilteredArticles();

    return (
        <section className={"apertura " + filter.orientation}>
            <div className="main-container">
                <div className="left-section">
                    {filteredArticles.map(article => (
                        <ItemArticle key={`article-${article.id}`} article={article} />
                    ))}
                </div>
                <div className="right-section"></div>
            </div>
        </section>
    )
}

export default Apertura;