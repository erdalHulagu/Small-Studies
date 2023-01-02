import { setItem } from "./utils/storage";
import "./index.scss";
import "bootstrap"; // Boostrap javascript dosyası


document.getElementById("btnClick").addEventListener("click", () => {
  alert("Hello Webpack");
  alert("Hello 2");

  setItem(
    "token",
    "klsdjfklsjkdfjksldsdkjfklsjdfklsjdlfkjslkdfjklsfklsjkldfjskljfklsjfl"
  );
});
