import React, { useState, useEffect } from 'react';
import ForumPost from './ForumPost';
import { getPosts } from '../api';


const ForumPostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      getPosts().then(response => {
          setPosts(response.data);
      }).catch(error => {
          console.error('Error fetching posts:', error);
      });
  }, []);

  return (
      <div>
          {posts.map(post => (
              <ForumPost key={post.id} post={post} />
          ))}
      </div>
  );
};

export default ForumPostList;