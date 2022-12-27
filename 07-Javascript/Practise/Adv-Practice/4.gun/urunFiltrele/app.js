let urunler = [...products]; //shallow copy

const urunlerEl = document.querySelector(".urunler");
const formEl = document.querySelector("form");
const inputEl = document.querySelector("input");
const markaEl = document.querySelector(".markalar");

/* urunlerin listesindeki içeriklerin belli html taglarına 
yerleştirilmesi  */

let icerik = "";

const urunYerlestir = () => {
  if (urunler.length < 1) {
    urunlerEl.innerHTML = ` <h2>Aradığınız ürün bulunmamaktadır</h2>`;
  }
  urunlerEl.innerHTML = urunler.map((product) => {
    const { id, title, image, price } = product;
    icerik += `  <article class="urun" id=${id}>
      <img src=${image} alt="" />
      <footer>
        <h5 class="isim">${title}</h5>
        <span class="fiyat">$ ${price}</span>
      </footer>
      </article>`;

    return icerik;
  });
};
urunYerlestir();

/* butonların category isimlerine göre oluşturulması için fonksiyon */

const butonYerlestir = () => {
  const butonText = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];

  markaEl.innerHTML = butonText
    .map((company) => {
      return ` <buton class= "btn" id=${company} >${company}</buton>`;
    })
    .join("");
};

butonYerlestir();
