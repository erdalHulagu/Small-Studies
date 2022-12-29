/* DOMContentLoaded –
 HTML yüklenip, işlenip, DOM tamamen inşa edildiğinde. */

/*  
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

EDIT: Updating to ES6 / ECMAScript 2015

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        [a,b]=[b,a]
    }
}

*/

document.addEventListener("DOMContentLoaded", () => {
  const liste = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
  ];

  liste.sort(() => 0.5 - Math.random());

  const containerEl = document.querySelector(".container");
  const sonucEl = document.querySelector("#sonuc");
  const mesajEl = document.querySelector(".mesaj");

  /* 

  1)
  tıklanan resimleri bir diziye ekleyeceğiz.
  bu dizideki eleman sayısı iki olunca reimleri karşılaştıracağız. 

2)
eşleşmesi doğru olanları da ayrı bir diziye ekleyeceğiz.
eğer dizideki eleman sayısı datamızdakinin length ine ulaşırsa
oyun biter.

   */

  let secilen = [];
  let kazanilan = [];
  let secilenId = [];

  const yerlestir = () => {
    for (let i = 0; i < liste.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("id", i);
      card.addEventListener("click", cevir);
      containerEl.appendChild(card);
    }
  };

  const cevir = (e) => {
    let cardId = e.target.id;
    secilen.push(liste[cardId].name);
    secilenId.push(cardId);
    e.target.setAttribute("src", liste[cardId].img);
    if (secilen.length === 2) {
      setTimeout(kontrol, 100);
    }
  };

  const kontrol = () => {
    const cards = document.querySelectorAll("img");
    const birinci = secilenId[0];
    const ikinci = secilenId[1];

    if (birinci == ikinci) {
      cards[birinci].setAttribute("src", "images/blank.png");
      cards[ikinci].setAttribute("src", "images/blank.png");
      mesajEl.innerHTML = ` <h3>Aynı şeyi tıkladınız.</h3>`;
    } else if (secilen[0] === secilen[1]) {
      mesajEl.innerHTML = ` <h3>Doğru eşleştirdiniz.</h3>`;
      cards[birinci].setAttribute("src", "images/white.png");
      cards[ikinci].setAttribute("src", "images/white.png");
      cards[birinci].removeEventListener("click", cevir);
      cards[ikinci].removeEventListener("click", cevir);
      kazanilan.push(...secilen);
    } else {
      cards[birinci].setAttribute("src", "images/blank.png");
      cards[ikinci].setAttribute("src", "images/blank.png");
      mesajEl.innerHTML = ` <h3>Tekrar deneyiniz.</h3>`;
    }

    secilen = [];
    secilenId = [];

    sonucEl.textContent = kazanilan.length / 2;
    if (kazanilan.length === liste.length) {
      sonucEl.innerText = "Tebrikler";
    }
  };

  yerlestir();
});
