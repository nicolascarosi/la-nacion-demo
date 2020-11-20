import { useContext } from "react";
import { ArticlesContext } from "../context";

const useFilterData = () => {

  const [state, setState] = useContext(ArticlesContext);

  const getFilteredArticles = () => {
    return state.filteredArticles ? state.filteredArticles : null;
  }

  const getFilter = () => {
    return state.filter ? state.filter : null;
  }

  const getArticles = () => {
    return state.articles ? state.articles : [];
  }

  const filterArticles = filter => {
    let filteredArticles = state.articles;
    if (filter.max_articles > 0) filteredArticles = state.articles.slice(0, filter.max_articles);
    
    setState(prevState => ({
      ...prevState,
      filter: filter,
      filteredArticles
    }));
  }


  return {
    getFilteredArticles,
    getFilter,
    getArticles,
    filterArticles
  }

}


export default useFilterData;
