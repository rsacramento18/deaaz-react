import React from 'react';

const Post = () =>  {

  return ( 
    <div>
      <h2 className="postTitle">Some Post Title</h2>
      <h4 className="postSubtitle">Some Post Subtitle</h4>
      <p className="post">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <span className="date">10/08/2020</span>
      <span className="user">W</span>
    </div>
  );
}

export default Post;
