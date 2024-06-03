// src/components/ForumPost.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ForumPost = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id)) || {};

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>Author: {post.author?.name}</p>
      <p>Date: {new Date(post.date_posted).toLocaleString()}</p>
    </div>
  );
};

export default ForumPost;
