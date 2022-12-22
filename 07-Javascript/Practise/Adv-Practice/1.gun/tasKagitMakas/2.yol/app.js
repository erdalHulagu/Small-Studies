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

const kullaniciSecimiEl = document.createElement("h2");
const sanalSecimEl = document.createElement("h2");
const sonucEl = document.createElement("h2");
const containerEl = document.getElementById("container");

containerEl.append(kullaniciSecimiEl, sanalSecimEl, sonucEl);

const secenekler = ["tas", "kagit", "makas"];

let kullaniciSecimi;
let sanalSecim;

const handleClick = (e) => {
  kullaniciSecimi = e.target.id;
  kullaniciSecimiEl.innerHTML = `Senin seçimin:${kullaniciSecimi}`;
  generateSanalSecim();
  getSonuc();
};

const generateSanalSecim = () => {
  sanalSecim = secenekler[Math.floor(Math.random() * secenekler.length)];
  sanalSecimEl.innerHTML = `Bilgisayarın seçimin:${sanalSecim}`;
};

/* Butonları ekleyelim */
for (let i = 0; i < secenekler.length; i++) {
  const buton = document.createElement("button");
  buton.setAttribute("id", secenekler[i]);
  buton.innerHTML = secenekler[i];
  buton.addEventListener("click", handleClick);
  containerEl.appendChild(buton);
}

/* kimin kazandığını belirlediğimiz fonksiyon */
/*  Taş makası, makas kağıdı, kâğıt da 
taşı yener. Eğer oyuncular aynı durumu seçerse 
oyun berabere biter.  */

const getSonuc = () => {
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
