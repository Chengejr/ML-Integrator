import React from 'react';
import ForumPostList from './ForumPostList';
import ForumPost from './ForumPost';
import CommentList from './CommentList';
import UserProfile from './UserProfile';
import Comment from './Comment';

const CommunityForum = () => {
  // Assuming you have data for posts, comments, and user profile
  const posts = []; // Array of post objects
  const comments = []; // Array of comment objects
  const userProfile = {}; // User profile object

  return (
    <div>
      <h1>Community Forum</h1>
      {/* Render ForumPostList component */}
      <ForumPostList posts={posts} />

      {/* Render individual ForumPost component */}
      {posts.map(post => (
        <ForumPost key={post.id} post={post} />
      ))}

      {/* Render CommentList component */}
      <CommentList comments={comments} />

      {/* Render UserProfile component */}
      <UserProfile user={userProfile} />

      {/* Render individual Comment component */}
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommunityForum;
