import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

    const data = [
        {label: 'Learn HTML5/CSS3 ...', important: false, id: 1},
        {label: 'Learn JavaScript ...', important: false},
        {label: 'Learn React.JS ...', important: true},
        {label: 'Learn HNode.JS ...', important: false}
    ];

    return(
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </div>
    )
}

export default App;