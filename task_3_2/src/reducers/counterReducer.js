import { createStore } from 'redux';

const INCREASE_VALUE = 'INCREASE_VALUE';
const DECREASE_VALUE = 'DECREASE_VALUE';

const defaultState = {
  selectCount: 0,
  mutableValue: 1
};

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREASE_VALUE:
      return { ...state, selectCount: state.selectCount + action.value };

    case DECREASE_VALUE:
      return { ...state, selectCount: state.selectCount - action.value };

    default:
      return state;
  }
};

const store = createStore(counterReducer);
export default store;
