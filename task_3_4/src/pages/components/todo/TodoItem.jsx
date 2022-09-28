import React, { useState } from 'react';
import clsx from 'clsx';
import style from './TodoItem.module.scss';

const TodoItem = ({
  todo: { id, title, completed },
  toggleSelect,
  handleChange
}) => {
  const [inputTitle, setTitle] = useState(title);
  const [focusTitle, setFocus] = useState(title);
  const [isEdit, setEdit] = useState(false);

  const editTodo = (event) => {
    setTitle(event.target.value);
  };

  const requestToggle = () => {
    toggleSelect({ id, completed });
  };

  const requestFocusEditing = (event) => {
    setEdit(true);
    setFocus(event.target.value);
  };

  const requestHandleChange = () => {
    setEdit(false);
    handleChange({ id, inputTitle });
  };

  const requestCancelChange = () => {
    setTitle(focusTitle);
  };

  return (
    <li className={style.item}>
      <input
        className={style.checkbox}
        type="checkbox"
        checked={completed}
        onChange={requestToggle}
      />
      <label className={style.body}>
        <input
          className={clsx(style.text, {
            [style.completed]: completed,
            [style.focus]: isEdit
          })}
          type="text"
          value={inputTitle}
          id={id}
          onFocus={requestFocusEditing}
          onChange={editTodo}
        />
        <div className={style.buttons}>
          <button
            className={clsx(style.changeTodo, style.button)}
            onClick={requestHandleChange}
            type="button"
          >
            change
          </button>
          <button
            className={clsx(style.cancelChange, style.button)}
            onClick={requestCancelChange}
            type="button"
          >
            cancel
          </button>
        </div>
      </label>
    </li>
  );
};

export default TodoItem;
