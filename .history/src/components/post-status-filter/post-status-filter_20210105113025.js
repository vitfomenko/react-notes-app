import React from 'react';

import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button type="buttom" className="btn btn-info">All</button>
            <button type="buttom" className="btn btn-outline-secondary">Liked</button>
        </div>
    )
}

export default PostStatusFilter;