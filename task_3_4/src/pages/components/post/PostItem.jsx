import React from 'react';
import style from './PostItem.module.scss';

const PostItem = (props) => {
  const { title, body } = props.post;
  return (
    <li className={style.item}>
      <h3 className={style.title}>{title}</h3>
      <span className={style.body}>{body}</span>
    </li>
  );
};

export default PostItem;
