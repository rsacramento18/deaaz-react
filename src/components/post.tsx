import React from 'react';
import DOMPurify from 'dompurify';

const Post = () =>  {
  

  const post: any = {
    id:1,
    letter: 'L', 
    color: '#fabd2f',
    title: 'Some Post Title',
    subtitle: 'Some post subtitle and Some post subtitle and Some post subtitle',
    content: '<p style="text-align: center;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown rinter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with th<strong>e release </strong>of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum<strong> is simply dum</strong>my text of the printing and typesetting industry. Lorem Ipsum has been the industry<strong>s standard</strong> dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into</p><ul><li style="text-align: center;">electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</li><li style="text-align: center;">containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including</li><li style="text-align: center;">versions of Lorem Ipsum.</li></ul>',
    date: '10/08/2020'
  }

  return ( 
    <div className="post" >
      <div className="post-header" >
        <div className="user">
          <div className="user-box" style={{backgroundColor: post.color}}>
            <div className="letter">{post.letter}</div>
          </div> 
        </div>
        <div className="post-title">
          <h2 className="title">{post.title}</h2>
          <h3 className="subtitle">{post.subtitle}</h3>
        </div>
      </div>
      <div className="post-content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.content)}}></div>
      <div className="post-date">
        <div className="date">
          <span>escrito a </span>
          <span className="date-weight">{post.date}</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
