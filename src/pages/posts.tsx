import React from 'react';
import Post from '../components/post';

const Posts = () => {
  
  return (
    <div className="posts">
      <div className="section-title">
        <h1>posts</h1>
      </div>
      <Post/> 
      <Post/> 
      <Post/> 
      <Post/> 
    </div>
  );
}

export default Posts;
