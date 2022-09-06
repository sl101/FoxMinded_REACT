const INCREASE_VALUE = 'INCREASE_VALUE';
const DECREASE_VALUE = 'DECREASE_VALUE';

export const increaseAction = (value) => ({
  type: INCREASE_VALUE,
  value
});

export const decreaseAction = (value) => ({
  type: DECREASE_VALUE,
  value
});
