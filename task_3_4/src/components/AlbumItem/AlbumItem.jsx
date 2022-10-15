import React from 'react';
import style from './AlbumItem.module.scss';

export const AlbumItem = ({ album: { title } }) => (
  <li className={style.item}>
    <span className={style.title}>{title}</span>
  </li>
);
