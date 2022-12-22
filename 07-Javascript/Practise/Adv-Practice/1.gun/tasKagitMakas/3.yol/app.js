/* 1.kullanıcı seçimini göstereceğim element
2.sanal seçimi göstereceğim element
3.seçimleri kakrşılaştırıp sonucu göstereceğim element
4. for döngüsüyle butonları oluşturalım.
5.butonların üzerinde yazmasını istediğim şeyleri bir dizide tutalım.
6. butonlara click olduğunda çalışsın istediğim fonksiyon
7. sanal seçim için fonksiyon
8.kullanıcı seçimi ile sanal seçimin karşılaştırılıp sonuçların
 switch ile yazılması 

Append sayfada seçtiğimiz bir alanın sonuna veri eklememizi sağlar.



 */

const sonucEl = document.querySelector("#sonuc");
const secenekEl = document.querySelector("#secenek");

const secenekler = ["tas", "kagit", "makas"];

/* kimin kazandığını belirlediğimiz fonksiyon */
/*  Taş makası, makas kağıdı, kâğıt da 
taşı yener. Eğer oyuncular aynı durumu seçerse 
oyun berabere biter.  */

const getSonuc = (e) => {
  let kullaniciSecimi = e.target.innerHTML;
  let sanalSecim = secenekler[Math.floor(Math.random() * secenekler.length)];

  switch (kullaniciSecimi + sanalSecim) {
    case "makaskagit":
    case "tasmakas":
    case "kagittas":
      sonucEl.innerHTML = "SEN KAZANDIN";
      break;
    case "kagitmakas":
    case "makastas":
    case "taskagit":
      sonucEl.innerHTML = "KAYBETTİN!";
      break;
    case "kagitkagit":
    case "makasmakas":
    case "tastas":
      sonucEl.innerHTML = "BERABERESİNİZ!";
      break;
  }
};

/* Butonları ekleyelim */
secenekler.forEach((secim) => {
  const buton = document.createElement("button");
  buton.innerHTML = secim;
  buton.addEventListener("click", getSonuc);
  secenekEl.appendChild(buton);
});
