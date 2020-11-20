import React from 'react';
import { ArticlesProvider } from "./context";

import Filter from './components/Filter';
import Apertura from './components/Apertura';


const App = () => {
    return (
        <ArticlesProvider>
            <Filter />
            <Apertura />
        </ArticlesProvider>
    );
}

export default App;
