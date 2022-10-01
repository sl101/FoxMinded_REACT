import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/actions/posts';

import PostList from './components/post/PostList';
import FormPost from '../components/FormPost';

const PostListPage = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.post);
  const { isLoading } = useSelector((state) => state.loader);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <section>
      <div className="container">
        <h2 className="title">Welcome to PostsList!</h2>
        <FormPost />
        <PostList isLoading={isLoading} posts={posts} />
      </div>
    </section>
  );
};

export default PostListPage;
