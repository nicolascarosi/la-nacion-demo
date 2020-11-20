import React, { useState, useEffect } from "react";

import ArticlesMock from './mocks/articles.json';

const initialContext = {
    articles: [],
    filteredArticles: [],
    filter: {
        orientation: "focal-izquierdo",
        max_articles: 0
    }
}

const ArticlesContext = React.createContext([{}, () => {}]);

const ArticlesProvider = props => {

    const [state, setState] = useState(initialContext);

    useEffect(() => {
        setState(prevState => ({
            ...prevState,
            articles: ArticlesMock,
            filteredArticles: ArticlesMock
        }));
    }, [])

    return <ArticlesContext.Provider value={[state, setState]}>{props.children}</ArticlesContext.Provider>;
};

export { ArticlesContext, ArticlesProvider, initialContext };
