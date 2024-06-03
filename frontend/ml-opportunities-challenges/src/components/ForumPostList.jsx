// src/components/ForumPostList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ForumPostList = ({ posts }) => {
  // Mock data for demonstration
  posts = [
    { id: 1, title: 'First Post', author: { name: 'Author1' }, date_posted: '2023-06-01T12:00:00Z' },
    { id: 2, title: 'Second Post', author: { name: 'Author2' }, date_posted: '2023-06-02T12:00:00Z' }
  ];

  return (
    <div>
      <h2>Forum Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/forum/post/${post.id}`}>{post.title}</Link>
            <p>Author: {post.author.name}</p>
            <p>Date: {new Date(post.date_posted).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForumPostList;
