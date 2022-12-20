/* 1. butonlara click olunca çalışacak fonksiyon
2. sanal seçimi yapacak fonksiyon
3.kullanıcı seçimi ile sanal seçimi karşılaştıracak fonksiyon
*/
const sanalSecimEl = document.getElementById("bilgisayar");
const kullaniciSecimiEl = document.getElementById("kullanici");
const sonucEl = document.getElementById("sonuc");
const butonlar = document.querySelectorAll("button");

let kullaniciSecimi;
let sanalSecim;
let sonuc;

butonlar.forEach((buton) => {
  buton.addEventListener("click", (e) => {
    kullaniciSecimi = e.target.id;
    kullaniciSecimiEl.innerHTML = kullaniciSecimi;
    generateSanalSecim(); //rastgele bir seçim üretecek fonksiyon olmalı

    /*   //TODO: 
        setTimeout ile sonucu bekleterek getirelim */

    getSonuc(); //rastgele seçim ile kullanıcı seçimini karşılaştıracak fonks.
  });
});

function generateSanalSecim() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber == 1) {
    sanalSecim = "tas";
  }
  if (randomNumber == 2) {
    sanalSecim = "makas";
  }
  if (randomNumber == 3) {
    sanalSecim = "kagit";
  }
  sanalSecimEl.innerHTML = sanalSecim;
}

function getSonuc() {
  /* Taş makası, makas kağıdı, kâğıt da 
    taşı yener. Eğer oyuncular aynı durumu seçerse 
    oyun berabere biter. */

  if (sanalSecim == kullaniciSecimi) {
    sonuc = "Beraberesiniz:)";
  } else if (sanalSecim == "tas" && kullaniciSecimi == "kagit") {
    sonuc = "sen kazandın";
  } else if (sanalSecim == "tas" && kullaniciSecimi == "makas") {
    sonuc = "kaybettin:(";
  } else if (sanalSecim == "kagit" && kullaniciSecimi == "makas") {
    sonuc = "sen kazandın";
  } else if (sanalSecim == "kagit" && kullaniciSecimi == "tas") {
    sonuc = "kaybettin:(";
  } else if (sanalSecim == "makas" && kullaniciSecimi == "tas") {
    sonuc = "sen kazandın";
  } else if (sanalSecim == "makas" && kullaniciSecimi == "kagit") {
    sonuc = "kaybettin:(";
  }
  sonucEl.innerHTML = sonuc;
}
