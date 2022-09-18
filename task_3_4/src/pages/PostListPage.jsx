import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getPosts from '../redux/actions/posts';

import PostList from './components/postPage/PostList';

const PostListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { posts } = useSelector((state) => state.post);
  const { isLoading } = useSelector((state) => state.loader);

  return (
    <section>
      <div className="container">
        <h2 className="title">Welcome to PostsList!</h2>
        <PostList isLoading={isLoading} posts={posts} />
      </div>
    </section>
  );
};

export default PostListPage;
