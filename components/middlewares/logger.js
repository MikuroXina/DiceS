export const logger = (store) => (next) => (action) => {
  console.log("Action", action);
  console.log("Before", store.getState());
  const ret = next(action);
  console.log("After", store.getState());
  return ret;
};
