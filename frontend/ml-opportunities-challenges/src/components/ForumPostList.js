import React from 'react';
import ForumPost from './ForumPost';

const ForumPostList = ({ posts }) => {
  // Check if posts is undefined or empty
  if (!posts || posts.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <div>
      {posts.map(post => (
        <ForumPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ForumPostList;
