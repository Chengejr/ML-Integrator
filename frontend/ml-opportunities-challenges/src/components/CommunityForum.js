// src/components/CommunityForum.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ForumPostList from './ForumPostList';
import ForumPost from './ForumPost';
import CommentList from './CommentList';
import UserProfile from './UserProfile';
import Comment from './Comment';

const CommunityForum = () => {
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the first post content', author: { name: 'Author1' }, date_posted: '2023-06-01T12:00:00Z' },
    { id: 2, title: 'Second Post', content: 'This is the second post content', author: { name: 'Author2' }, date_posted: '2023-06-02T12:00:00Z' }
  ];
  
  const comments = [
    { id: 1, content: 'First comment', author: { name: 'Commenter1' }, date_commented: '2023-06-01T12:00:00Z' },
    { id: 2, content: 'Second comment', author: { name: 'Commenter2' }, date_commented: '2023-06-02T12:00:00Z' }
  ];

  const userProfile = { name: 'John Doe', email: 'john.doe@example.com', joined: '2023-01-01T12:00:00Z' };

  return (
    <div>
      <h1>Community Forum</h1>
      <nav>
        <ul>
          <li><Link to="/forum/posts">Forum Posts</Link></li>
          <li><Link to="/forum/comments">Comments</Link></li>
          <li><Link to="/forum/profile">User Profile</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Welcome to the Community Forum</h2>} />
        <Route path="posts" element={<ForumPostList posts={posts} />} />
        <Route path="post/:id" element={<ForumPost posts={posts} />} />
        <Route path="comments" element={<CommentList comments={comments} />} />
        <Route path="comment/:id" element={<Comment comments={comments} />} />
        <Route path="profile" element={<UserProfile user={userProfile} />} />
      </Routes>
    </div>
  );
};

export default CommunityForum;
