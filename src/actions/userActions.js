export const setName = (name) => ({
  type: 'SET_NAME',
  payload: new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 2000);
  }),
});

export const setAge = (age) => ({
  type: 'SET_AGE',
  payload: age,
});
