import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import { getUser } from '../actions/users';
import { Preloader } from '../shared/Preloader';
import { UserInfo } from '../components/UserInfo';
=======
import { getUser } from '../redux/actions/users';
import { Preloader } from '../components/Preloader';
import { UserInfo } from './components/UserInfo';
>>>>>>> 53a07870656b53aeead7344a02be3c563beb6583

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
