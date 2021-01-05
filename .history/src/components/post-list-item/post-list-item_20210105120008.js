import React, {Component} from 'react';

import './post-list-item.css';

export default class PostListItem extends Component {
    render() {
        return (

        )
    }
}

const PostListItem = ({label, important = false}) => {

    let classNames = 'app-list-item d-flex justify-content-between';

    if (important) {
        classNames += ' important';
    }

    return (

    )
}

export default PostListItem;