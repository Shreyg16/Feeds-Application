import React from 'react';
import './Post.css';

const Post = ({ post, deletePost, editPost }) => {
  return (
    <div className='post'>
      <h2 className='title'>{post.title}</h2>
      <p className='content'>{post.content}</p>
      <button className='edit-btn' onClick={() => editPost(post)}>EDIT</button>
      <button className='delete-btn' onClick={() => deletePost(post.id)}>DELETE</button> <br />
    </div>
  );
};

export default Post;
