import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faPhone,
  faHouse,
  faGlobe,
  faIndustry
} from '@fortawesome/free-solid-svg-icons';
import style from './UserInfo.module.scss';

export const UserInfo = ({
  user: { name, email, phone, website, address, company }
}) => {
  const userEmail = email.toLowerCase();
  const userPhone = phone.split(' ')[0];
  const userAddress = `${address.street}$, ${address.suite}$\n ${address.city} ${address.zipcode}`;
  const userCompany = `${company.name}$\n ${company.catchPhrase}$\n ${company.bs}`;
  return (
    <section className={style.userInfo}>
      <div className={style.inner}>
        <ul className={style.list}>
          <li className={style.item}>
            <FontAwesomeIcon className={style.icon} icon={faUser} />
            <span className={style.value}>{name}</span>
          </li>

          <li className={style.item}>
            <FontAwesomeIcon className={style.icon} icon={faEnvelope} />
            <span className={style.value}>{userEmail}</span>
          </li>

          <li className={style.item}>
            <FontAwesomeIcon className={style.icon} icon={faPhone} />
            <span className={style.value}>{userPhone}</span>
          </li>

          <li className={style.item}>
            <FontAwesomeIcon className={style.icon} icon={faHouse} />
            <span className={style.value}>{userAddress}</span>
          </li>

          <li className={style.item}>
            <FontAwesomeIcon className={style.icon} icon={faGlobe} />
            <span className={style.value}>{website}</span>
          </li>

          <li className={style.item}>
            <FontAwesomeIcon className={style.icon} icon={faIndustry} />
            <span className={style.value}>{userCompany}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
