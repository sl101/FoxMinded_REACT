import React from 'react';
import style from './UserInfo.module.scss';

const User = ({ user: { name, email, phone, website, address, company } }) => {
  const userEmail = email.toLowerCase();
  const userPhone = phone.split(' ')[0];
  const userAddress = `${address.street}${','} ${address.suite}${'\n'}${
    address.city
  } ${address.zipcode}`;
  const userCompany = `${company.name}${'\n'} ${company.catchPhrase}${'\n'} ${
    company.bs
  }`;
  return (
    <section className={style.userInfo}>
      <div className={style.inner}>
        <ul className={style.list}>
          <li className={style.item}>{name}</li>
          <li className={style.item}>{userEmail}</li>
          <li className={style.item}>{userPhone}</li>
          <li className={style.item}>{userAddress}</li>
          <li className={style.item}>{website}</li>
          <li className={style.item}>{userCompany}</li>
        </ul>
      </div>
    </section>
  );
};

export default User;
