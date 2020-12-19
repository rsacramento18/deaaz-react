import React from 'react';
import Post from '../components/post';

const Posts = () => {
  
  return (
    <div className="posts">
      <div className="section-title">
        <h1>posts</h1>
      </div>
      <div className="posts-content">
        <Post/> 
        <Post/> 
        <Post/> 
        <Post/> 
      </div>
    </div>
  );
}

export default Posts;
