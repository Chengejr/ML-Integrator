import React from 'react';
import ForumPostList from './ForumPostList';
import ForumPost from './ForumPost';
import CommentList from './CommentList';
import UserProfile from './UserProfile';
import Comment from './Comment';

const CommunityForum = () => {
  // Assuming you have data for posts, comments, and user profile
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the first post.', author: { name: 'John Doe' }, date_posted: '2024-05-28T12:00:00Z' },
    { id: 2, title: 'Second Post', content: 'This is the second post.', author: { name: 'Jane Smith' }, date_posted: '2024-05-29T12:00:00Z' }
               ]; // Array of post objects
  const comments = [{ id: 1, content: 'This is the first comment.', author: { name: 'Alice' }, date_posted: '2024-05-28T13:00:00Z' },
                { id: 2, content: 'This is the second comment.', author: { name: 'Bob' }, date_posted: '2024-05-29T14:00:00Z' }
                ]; // Array of comment objects
  const userProfile = {name: 'User Name', bio: 'User bio goes here.'}; // User profile object

  console.log('Posts:', posts);
  console.log('Comments:', comments);
  console.log('UserProfile:', userProfile);

  
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
