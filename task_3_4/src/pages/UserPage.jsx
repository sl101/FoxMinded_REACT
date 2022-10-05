// import React from 'react';
import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import getUsers from '../redux/actions/users';
import Preloader from '../components/Preloader';
import UserInfo from './components/user/UserInfo';

const UserPage = () => {
  // const dispatch = useDispatch();
  const { id } = useParams();
  // console.log(users);
  // debugger;

  const [user, setUser] = useState([]);

  useEffect(() => {
    // dispatch(getUsers());
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  // const users = useSelector((state) => state.user);

  // console.log(user);

  // if (user) {
  // debugger;
  // user.map((element) => {
  // if (element.id === id) {
  // setUser(user);
  // }
  // return element;
  // });
  // }
  // debugger;
  if (user.length === 0) {
    return <Preloader />;
  }
  return (
    <div>
      <UserInfo user={user} />
    </div>
  );
};
export default UserPage;
