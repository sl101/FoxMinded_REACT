import dataFetch from '../utils/axios';

export const tabsAPI = {
  fetchTabs(path) {
    return dataFetch.get(path);
  }
};
