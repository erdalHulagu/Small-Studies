let body = document.querySelector("body");
let renkAd = document.querySelector("#renk");
let buton = document.querySelector("#renk-degistir");

const renkler = ["Yellow","Blue","Green","Red","Aqua","Gray","Pink"];
let renkIndex;

const renkDegistir = ()=>{
    renkIndex = Math.floor(Math.random()*renkler.length);
    console.log(renkIndex);
    body.style.backgroundColor = renkler[renkIndex];
    renkAd.innerText = renkler[renkIndex];
    buton.innerText= renkler[renkIndex];
}

buton.addEventListener("click",()=>{
    renkDegistir();
})

