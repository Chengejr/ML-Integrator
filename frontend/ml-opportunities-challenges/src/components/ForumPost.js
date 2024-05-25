import React from 'react';

const ForumPost = ({ post }) => {
  // Check if post is defined before accessing its properties
  if (!post) {
    return <div>No post available</div>;
  }

  // Destructure post properties with default values to handle undefined cases
  const { title = 'No Title', content = 'No Content', author = 'Unknown Author', date = 'Unknown Date' } = post;

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>Author: {author}</p>
      <p>Date: {date}</p>
    </div>
  );
};

export default ForumPost;
