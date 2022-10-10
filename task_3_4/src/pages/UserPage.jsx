import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser } from '../actions/users';
import { Preloader } from '../shared/Preloader';
import { UserInfo } from '../components/UserInfo';

export const UserPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  if (!user.name) {
    return <Preloader />;
  }
  return (
    <div>
      <UserInfo user={user} />
    </div>
  );
};
