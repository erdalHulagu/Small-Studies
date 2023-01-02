import { setItem } from "./utils/storage";
import "./index.scss";
import "bootstrap"; // Boostrap javascript dosyası


document.getElementById("btnClick").addEventListener("click", () => {
  alert("Hello Webpack 1");

  setItem(
    "token",
    "klsdjfklsjkdfjksldsdkjfklsjdfklsjdlfkjslkdfjklsfklsjkldfjskljfklsjfl"
  );
});
