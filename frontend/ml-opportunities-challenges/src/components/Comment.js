import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      {comment && (
        <div>
          <p>{comment.content}</p>
          <p>Author: {comment.author}</p>
          <p>Date: {comment.date}</p>
        </div>
      )}
    </div>
  );
};

export default Comment;
