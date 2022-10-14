import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import style from './UserTabs.module.scss';
import { PostItem } from '../PostItem';
import { AlbumItem } from '../AlbumItem/AlbumItem';
import { TodoList } from '../TodoList';

export const UserTabs = ({ albums, userPosts, userTodos }) => {
  console.log();
  return (
    <Tabs>
      <TabList className={style.tabList}>
        <Tab selectedClassName={style.selected} className={style.tab}>
          albums
        </Tab>
        <Tab selectedClassName={style.selected} className={style.tab}>
          posts
        </Tab>
        <Tab selectedClassName={style.selected} className={style.tab}>
          todos
        </Tab>
      </TabList>

      <TabPanel selectedClassName={style.selected} className={style.tabPanel}>
        {albums.map((album) => (
          <AlbumItem key={album.id} album={album} />
        ))}
      </TabPanel>
      <TabPanel selectedClassName={style.selected} className={style.tabPanel}>
        <ul>
          {userPosts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </ul>
      </TabPanel>
      <TabPanel selectedClassName={style.selected} className={style.tabPanel}>
        <TodoList todos={userTodos} />
      </TabPanel>
    </Tabs>
  );
};
