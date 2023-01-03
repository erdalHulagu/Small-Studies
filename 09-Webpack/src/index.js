import { setItem } from "./utils/storage";
import "./index.scss";

document.getElementById("btnClick").addEventListener("click", () => {
  alert("Hello Webpack");
  alert("Hello 2");

  const arr = [123,56,3,67,2,67];
  console.log(getArray([...arr]));

  setItem(
    "token",
    "klsdjfklsjkdfjksldsdkjfklsjdfklsjdlfkjslkdfjklsfklsjkldfjskljfklsjfl"
  );
});

const getArray = (arr) => {
  return arr.filter((x) => x > 10).reduce((t, x) => x + t, 0);
};
