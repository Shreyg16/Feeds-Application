import React, { useState, useEffect } from 'react';
import './PostForm.css';


const PostForm = ({ addPost, updatePost, editingPost, setEditingPost }) => {
  const [post, setPost] = useState({ id: '', title: '', content: '' });

  useEffect(() => {
    if (editingPost) {
      setPost(editingPost);
    }
  }, [editingPost]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.id) {
      updatePost(post);
      setEditingPost(null);
    } else {
      post.id = new Date().getTime().toString();
      addPost(post);
    }
    setPost({ id: '', title: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit} className='outer-form'>
      <h2 className='feeds-heading'>FEEDS PAGE</h2>
      <input
        className='post-title'
        type="text"
        name="title"
        placeholder="Title"
        value={post.title}
        onChange={handleChange}
        required
      /> <br />
      <textarea
        className='post-content'
        name="content"
        placeholder="Content"
        value={post.content}
        onChange={handleChange}
        required
      /> <br />
      <button  className='create-btn' type="submit">{post.id ? 'UPDATE POST' : 'CREATE POST'}</button>
    </form>
  );
};

export default PostForm;
