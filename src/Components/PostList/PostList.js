import React from 'react';
import Post from '../Post/Post';

const PostList = ({ posts, deletePost, editPost }) => {
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} deletePost={deletePost} editPost={editPost} />
      ))}
    </div>
  );
};

export default PostList;
