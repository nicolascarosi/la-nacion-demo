import React from 'react';

import useFilterData from '../hooks/useFilterData';

const FOCAL_IZQUIERDO = 'focal-izquierdo';
const FOCAL_DERECHO = 'focal-derecho';

const Filter = () => {

    const { getFilter, filterArticles, getArticles } = useFilterData();

    const filter = getFilter();
    const articles = getArticles();

    const handleChangeOrientation = e => {
        let filterCopy = {...filter}
        let value = e.target.value;
        if (filterCopy.max_articles === 3) {
            filterCopy.orientation = FOCAL_IZQUIERDO;
        }
        else if (filterCopy.max_articles === 5) {
            filterCopy.orientation = FOCAL_DERECHO;
        }
        else {
            filterCopy.orientation = value;
        }
        filterArticles(filterCopy);
    }

    const handleChangeMaxArticles = e => {
        let filterCopy = {...filter}
        let value = parseInt(e.target.value);

        if (value > articles.length) value = articles.length;

        filterCopy.max_articles = value;
        filterArticles(filterCopy);
    }

    return (
        <section className="filter">
            <div className="main-container">
                <div className="form-element">
                    <label>Focal:</label>
                    <select onChange={handleChangeOrientation} defaultValue={FOCAL_IZQUIERDO} >
                        <option value="focal-izquierdo">Focal Izquierdo</option>
                        <option value="focal-derecho">Focal Derecho</option>
                    </select>
                </div>
                <div className="form-element">
                    <label>Numero de notas:</label>
                    <input onChange={handleChangeMaxArticles} type="number" max={articles.length} min="0" />
                </div>
            </div>
        </section>
    )
}

export default Filter;