import React from 'react';
import ForumPostList from './ForumPostList';
import ForumPost from './ForumPost'; // Import ForumPost component once
import Comment from './Comment';
import CommentList from './CommentList';
import UserProfile from './UserProfile';

const CommunityForum = () => {
  return (
    <div>
      <h1>Community Forum</h1>
      <ForumPostList />
      <ForumPost />
      <CommentList />
      <UserProfile />
      <Comment />
    </div>
  );
}

export default CommunityForum;
