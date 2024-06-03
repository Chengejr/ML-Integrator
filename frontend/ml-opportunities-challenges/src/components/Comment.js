// src/components/Comment.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Comment = ({ comments }) => {
  const { id } = useParams();
  const comment = comments.find(comment => comment.id === parseInt(id)) || {};

  return (
    <div>
      <p>{comment.content}</p>
      <p>Author: {comment.author?.name}</p>
      <p>Date: {new Date(comment.date_commented).toLocaleString()}</p>
    </div>
  );
};

export default Comment;
