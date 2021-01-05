import React from 'react';

import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem label='First commit...'/>
            <PostListItem label='First commit...'/>
            <PostListItem label='First commit...'/>
        </ul>
    )
}

export default PostList;