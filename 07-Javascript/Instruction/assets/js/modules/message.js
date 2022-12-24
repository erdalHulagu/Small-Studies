
const showAlert = (msg) => {
  alert(msg);
};

const showConfirm = (msg) => {
  const result = confirm(msg);
  return result;
};

export default showAlert;
export { showConfirm };
