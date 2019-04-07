export default (store) => (next) => (action) => {
  console.log('Action', action);
  console.log('Before', store.getState());
  next(action);
  console.log('After', store.getState());
};
