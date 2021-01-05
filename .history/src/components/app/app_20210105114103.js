import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

    const data = [
        {label: 'Learn HTML5/CSS3 ...', important: false},
        {label: 'Learn JavaScript ...', important: false},
        {label: 'Learn HTML5/CSS3 ...', important: false},
        {label: 'Learn HTML5/CSS3 ...', important: false},
    ];

    return(
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList />
            <PostAddForm />
        </div>
    )
}

export default App;