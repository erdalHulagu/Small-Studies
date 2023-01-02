import { setItem } from "./utils/storage";
import "./index.scss";
import "bootstrap"; // Boostrap javascript dosyası


document.getElementById("btnClick").addEventListener("click", () => {
  alert("Hello Webpack");

  setItem(
    "token",
    "klsdjfklsjkdfjksldsdkjfklsjdfklsjdlfkjslkdfjklsfklsjkldfjskljfklsjfl"
  );
});
