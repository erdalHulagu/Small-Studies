/* Adım1: Yeni yıl ile şimdiki zaman arasında ne kadar fark bulalım.
--bunu saniyede 1 yapmalıyız ki güncel olsun.

Adım2:
ms cinsinden gelen farkı gün, saat, dakika ve sn olarak hesaplamak için

önce farkı 1000'e bölelim.Bu değer A olsun.

1 sa=60dk=60*60=3600sn;

1 gün içinde 24 saat var.

a.gün miktarı:

sn cinsine dönüştürdüğüm farkı(yani A sayısını) 3600*24e bölersem 
kaç gün kaldığını bulabilirim.

b.saat miktarı:(güne dönüştüremeyeceğim kalan )

Ama elimde 3600*24e bölünemeyen bir kalan olacak.
o kalan ile de kaç saat olduğunu bulabilmem için A sayısını 3600a bölüp
 24 ile bölümünden kalanı mod ile alabilirim.

c.dakika miktarı:(saate dönüştüremeyeceğim kalan )

A sayısını 60a böldükten sonra 60 ile bölümünden kalanı mod ile
 alırsam dakikayı elde ederim.

d.saniye miktarı:(dakikaya dönüştüremeyeceğim kalan )
A sayısının 60 ile bölümünden kalanı alırsam saniyeyi elde ederim.

Adım3:arka plan rengi yanıp söner gibi olsun sayac ile beraber.

Adım4:Datadan random olarak hediye ve mesaj getirelim belli süre
 aralıklarında değişecek şekilde

Adım5:Başlığı arka plan rengi kullanıcı sayfaya her girdiğinde
 farklı olsun.(Üç ayrı renkten biri) */

import { hediye } from "./data.js";

const gunId = document.getElementById("gun");
const saatId = document.getElementById("saat");
const dakikaId = document.getElementById("dakika");
const saniyeId = document.getElementById("saniye");

const noel = document.querySelector(".noel");
const sayacEl = document.querySelector(".sayac");
const mesajEl = document.querySelector(".msj");
const hediyeEl = document.querySelector(".hediye");

const yeniYil = "1 Jan 2023";

function geriSayac() {
  const yeniYilDate = new Date(yeniYil);
  console.log(yeniYilDate);
  const simdikiDate = new Date();
  console.log(simdikiDate);

  const totalSeconds = (yeniYilDate - simdikiDate) / 1000;
  console.log(totalSeconds);

  const gun = Math.floor(totalSeconds / 3600 / 24);
  const saat = Math.floor(totalSeconds / 3600) % 24;
  const dakika = Math.floor(totalSeconds / 60) % 60;
  const saniye = Math.floor(totalSeconds) % 60;

  gunId.innerHTML = gun;
  saatId.innerHTML = formatTime(saat);
  dakikaId.innerHTML = formatTime(dakika);
  saniyeId.innerHTML = formatTime(saniye);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

geriSayac();

setInterval(() => {
  geriSayac();
  if (sayacEl.style.background == "antiquewhite") {
    sayacEl.style.background = "crimson";
  } else {
    sayacEl.style.background = "antiquewhite";
  }
}, 1000);

const rndmMsj = () => {
  return hediye[Math.floor(Math.random() * hediye.length)].mesaj;
};

const rndmResim = () => {
  return hediye[Math.floor(Math.random() * hediye.length)].img;
};

setInterval(() => {
  noel.style.background = "antiquewhite";
  noel.classList.toggle("d-none");
  mesajEl.innerText = rndmMsj();
  hediyeEl.setAttribute("src", rndmResim());
}, 3000);

let baslik = document.querySelector(".baslik");

let giris = Number(localStorage.getItem("counter"));
giris = giris ? ++giris : 1;

localStorage.setItem("counter", giris);

if (giris % 3 == 0) {
  baslik.style.background = "bisque";
} else if (giris % 3 == 1) {
  baslik.style.background = "lightcoral";
} else {
  baslik.style.background = "beige";
}
