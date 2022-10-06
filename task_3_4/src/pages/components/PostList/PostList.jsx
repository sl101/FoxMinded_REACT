import React from 'react';
import { PostItem } from './PostItem';
import { Preloader } from '../../../components/Preloader';

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
