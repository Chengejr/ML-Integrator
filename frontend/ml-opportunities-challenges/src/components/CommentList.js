// src/components/CommentList.js
import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({ comments }) => {
  // Mock data for demonstration
  comments = [
    { id: 1, content: 'First comment', author: { name: 'Commenter1' }, date_commented: '2023-06-01T12:00:00Z' },
    { id: 2, content: 'Second comment', author: { name: 'Commenter2' }, date_commented: '2023-06-02T12:00:00Z' }
  ];

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <Link to={`/forum/comment/${comment.id}`}>{comment.content}</Link>
            <p>Author: {comment.author.name}</p>
            <p>Date: {new Date(comment.date_commented).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
