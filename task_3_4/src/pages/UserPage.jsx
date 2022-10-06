import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser } from '../redux/actions/users';
import { Preloader } from '../components/Preloader';
import { UserInfo } from './components/UserInfo';

export const UserPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  const user = useSelector((state) => state.user.user);

  if (user.length === 0) {
    return <Preloader />;
  }
  return (
    <div>
      <UserInfo user={user} />
    </div>
  );
};
