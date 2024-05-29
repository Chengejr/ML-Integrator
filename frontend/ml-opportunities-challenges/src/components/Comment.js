import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      <p>{comment.content}</p>
      <p>Author: {comment.author.name}</p>
      <p>Date: {new Date(comment.date_posted).toLocaleString()}</p>
    </div>
  );
};

export default Comment;
