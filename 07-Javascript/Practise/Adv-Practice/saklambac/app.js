/* 1)Başlat fonksiyonu:
-her şeyi başlangıç değerine döndürmeli
-süreyi başlatmalı
(süreyi başlatan fonksiyon ile)
2)Süreyi başlatıp geri sayarak bitiren fonksiyon
3)köstebekleri rastgele aralıklarla yukarı çıkarıp indiren fonksiyon
4)rastgele süre oluşturan fonksiyon
5)köstebekleri rastgele yerleştiren fonksiyon
6)köstebeklere yakalama fonksiyonu
 */

const kostebekAll = document.querySelectorAll(".kostebek");
const baslatButon = document.getElementById("baslat");
const skorEl = document.getElementById("skor");
const vakitEl = document.getElementById("vakit");

let skor = 0;
let vakit = 10;
let gameover = false;

const geriSayac = () => {
  if (!gameover) {
    vakit--;
    vakitEl.innerText = vakit;
  } else {
    vakitEl.innerText = "süre doldu";
  }
};

const rndmYerlestir = () => {
  return kostebekAll[Math.floor(Math.random() * kostebekAll.length)];
};

const rndmTime = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const yukari = () => {
  const getirKostebek = rndmYerlestir();
  const bekleme = rndmTime(750, 1500);
  getirKostebek.classList.add("secilen");

  setTimeout(() => {
    getirKostebek.classList.remove("secilen");
    if (!gameover) yukari();
  }, bekleme);
};

const oyunBaslat = () => {
  vakit = 10;
  skor = 0;
  gameover = false;

  const interval = setInterval(() => {
    geriSayac(); //süreyi 0'a kadar 1er 1er azaltacak fonksiyon

    if (gameover) clearInterval(interval); //cıkıs için
  }, 1000);

  yukari(); //kostebekleri rastgele yukarı çıkartacak

  setTimeout(() => {
    gameover = true;
  }, vakit * 1000);

  skorEl.innerText = 0;
};

const yakala = (e) => {
  if (e.target.classList.contains("secilen")) {
    skor++;
    e.target.classList.remove("secilen");
  }
  skorEl.innerText = skor;
};

baslatButon.addEventListener("click", oyunBaslat);
kostebekAll.forEach((kostebek) => kostebek.addEventListener("click", yakala));
