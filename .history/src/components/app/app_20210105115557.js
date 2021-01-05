import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

    const data = [
        {label: 'Learn HTML5/CSS3 ...', important: false, id: 'qwe'},
        {label: 'Learn JavaScript ...', important: false, id: 'asd'},
        {label: 'Learn React.JS ...', important: true, id: 'zxc'},
        {label: 'Learn HNode.JS ...', important: false, id: 'ghj'}
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