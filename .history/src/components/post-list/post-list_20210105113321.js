import React from 'react';

import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem label='Learn HTML5/CSS3...'/>
            <PostListItem label='Learn JavaScript...'/>
            <PostListItem label='FLearn React.JS...'/>
            <PostListItem label='FLearn React.JS...'/>
        </ul>
    )
}

export default PostList;