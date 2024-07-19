
import React, { useState } from 'react';
import Login from "./Components/Login/Login";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Register from "./Components/Register/Register";
import PostForm from "./Components/PostForm/PostForm";
import PostList from "./Components/PostList/PostList";
import "./App.css";


function App() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map(post => (post.id === updatedPost.id ? updatedPost : post)));
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const editPost = (post) => {
    setEditingPost(post);
  };
  return (
    
    
    <Router>
      
     <div>
      <Routes>

     <Route path='/' element={<Register/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/postform' element={<PostForm addPost={addPost} updatePost={updatePost} editingPost={editingPost} setEditingPost={setEditingPost}/>}></Route>
     
     </Routes>

     <PostList posts={posts} deletePost={deletePost} editPost={editPost}/>
     </div>
    </Router>
    
  );
}

export default App;
