import React from 'react';

const ForumPost = ({ post }) => {
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Author: {post.author.name}</p>
            <p>Date: {new Date(post.date_posted).toLocaleString()}</p>
        </div>
    );
};

export default ForumPost;