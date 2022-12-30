const setItem = (key, value) => {
  localStorage.setItem(key, value);
};

/* getItem ileride değiştirmem lazım */
const getItem = (key) => {
  return localStorage.getItem(key);
};

export { setItem, getItem };
