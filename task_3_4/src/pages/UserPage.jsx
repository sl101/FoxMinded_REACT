import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser } from '../actions/users';
import { getUserTabs } from '../actions/tabs';
import { Preloader } from '../shared/Preloader';
import { UserInfo } from '../components/UserInfo';
import { UserTabs } from '../components/UserTabs/UserTabs';

export const UserPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.user.user);
  const albums = useSelector((state) => state.user.albums);
  const userPosts = useSelector((state) => state.post.userPosts);
  const userTodos = useSelector((state) => state.todo.userTodos);

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  useEffect(() => {
    const tab = 'albums';
    dispatch(getUser(id));
    dispatch(getUserTabs({ id, tab }));
  }, []);

  useEffect(() => {
    const tab = 'posts';
    if (!userPosts.length) {
      dispatch(getUserTabs({ id, tab }));
    }
  }, []);

  useEffect(() => {
    const tab = 'todos';
    if (!userTodos.length) {
      dispatch(getUserTabs({ id, tab }));
    }
  }, []);

  if (!user.name) {
    return <Preloader />;
  }
  return (
    <section className="section">
      <h2 className="title">{user.username}</h2>
      <UserInfo user={user} />
      <UserTabs
        id={id}
        albums={albums}
        userPosts={userPosts}
        userTodos={userTodos}
      />
    </section>
  );
};
