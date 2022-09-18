import React from 'react';
import style from './TodoItem.module.scss';

const TodoItem = (props) => {
  const { title } = props.todo;

  return (
    <li className={style.item}>
      <span className={style.body}>{title}</span>
    </li>
  );
};

export default TodoItem;
