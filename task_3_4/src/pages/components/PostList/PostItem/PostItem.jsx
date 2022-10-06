import React from 'react';
import style from './PostItem.module.scss';

export const PostItem = ({ post: { title, body } }) => (
  <li className={style.item}>
    <h3 className={style.title}>{title}</h3>
    <span className={style.body}>{body}</span>
  </li>
);
