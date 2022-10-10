import React from 'react';
<<<<<<<< HEAD:task_3_4/src/components/PostList/PostList.jsx
import { PostItem } from '../PostItem';
import { Preloader } from '../../shared/Preloader';
========
import { PostItem } from './PostItem';
import { Preloader } from '../../../components/Preloader';
>>>>>>>> 53a07870656b53aeead7344a02be3c563beb6583:task_3_4/src/pages/components/PostList/PostList.jsx

export const PostList = ({ isLoading, posts }) => {
  if (isLoading) {
    return <Preloader />;
  }
  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};
