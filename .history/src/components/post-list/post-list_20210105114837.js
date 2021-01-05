import React from 'react';

import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        return (
            <li className="list-group-item">
                <PostListItem label={posts[0].label} important={posts[0].important} />
            </li>
        )
    });
    return (
        <ul className="app-list list-group">
            <PostListItem label={posts[0].label} important={posts[0].important} />
            <PostListItem label='Learn JavaScript ...' />
            <PostListItem label='Learn React.JS ...' />
            <PostListItem label='Learn Node.JS ...' />
        </ul>
    )
}

export default PostList;