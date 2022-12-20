/* elementleri seçip bir değer atayalım*/
const ekranEl = document.querySelector("#ekran");
const sifreUzEl = document.querySelector("#sifreUz");
const upperEl = document.querySelector("#upper");
const lowerEl = document.querySelector("#lower");
const sayiEl = document.querySelector("#sayi");
const sembolEl = document.querySelector("#sembol");
const uretEl = document.querySelector("#uret");

/* büyük-küçük harf, sayı ve sembolleri bir değere atayalım */
const buyukHarf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const kucukHarf = "abcdefghijklmnopqrstuvwxyz";
const sayi = "0123456789";
const sembol = "!@#$%^&*()_+=";

/* random olarak küçük harf getiren fonksiyon */
const getLowercase = () => {
  return kucukHarf[Math.floor(Math.random() * kucukHarf.length)];
};

/* random olarak büyük harf getiren fonksiyon */
const getUppercase = () => {
  return buyukHarf[Math.floor(Math.random() * buyukHarf.length)];
};
/* random olarak sayi getiren fonksiyon */
const getNumber = () => {
  return sayi[Math.floor(Math.random() * sayi.length)];
};
/* random olarak sembol getiren fonksiyon */
const getSembol = () => {
  return sembol[Math.floor(Math.random() * sembol.length)];
};

/* kullanıcının seçimlerine göre sifre üreten temel fonksiyon */
const sifreUret = () => {
  const inputUz = sifreUzEl.value;

  let password = "";

  if (upperEl.checked) {
    password += getUppercase();
  }
  if (lowerEl.checked) {
    password += getLowercase();
  }
  if (sayiEl.checked) {
    password += getNumber();
  }
  if (sembolEl.checked) {
    password += getSembol();
  }

  for (let i = password.length; i < inputUz; i++) {
    password += tamamla();
  }

  ekranEl.innerText = password;
};

/*kullanıcının seçimleriyle belirlediği şifre uzunluğu
 arasındaki boşluğu
yine kullanıcının seçimlerine göre tamamlama fonksiyon  */

const tamamla = () => {
  const tamamlamaArr = [];

  if (upperEl.checked) {
    tamamlamaArr.push(getUppercase());
  }
  if (lowerEl.checked) {
    tamamlamaArr.push(getLowercase());
  }
  if (sayiEl.checked) {
    tamamlamaArr.push(getNumber());
  }
  if (sembolEl.checked) {
    tamamlamaArr.push(getSembol());
  }

  if (tamamlamaArr.length == 0) return "";

  return tamamlamaArr[Math.floor(Math.random() * tamamlamaArr.length)];
};

/* buton tıklandığında sifreUret fonksiyon gelsin */

uretEl.addEventListener("click", sifreUret);
