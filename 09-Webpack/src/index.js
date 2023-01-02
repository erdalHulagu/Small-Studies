import { setItem } from "./utils/storage";
import "./index.scss";


document.getElementById("btnClick").addEventListener("click", () => {
  alert("Hello Webpack");
  alert("Hello 2");

  setItem(
    "token",
    "klsdjfklsjkdfjksldsdkjfklsjdfklsjdlfkjslkdfjklsfklsjkldfjskljfklsjfl"
  );
});
