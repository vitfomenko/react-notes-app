import React from 'react';

import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem label='Learn HTML/...'/>
            <PostListItem label='Second commit...'/>
            <PostListItem label='Fird commit...'/>
        </ul>
    )
}

export default PostList;