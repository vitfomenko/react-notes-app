import React from 'react';

import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = ({posts}) => {
    return (
        <ul className="app-list list-group">
            <PostListItem label={posts[0]} />
            <PostListItem label='Learn JavaScript ...' />
            <PostListItem label='Learn React.JS ...' />
            <PostListItem label='Learn Node.JS ...' />
        </ul>
    )
}

export default PostList;