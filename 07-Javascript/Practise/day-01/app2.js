const renk1 = document.querySelector(".red");
const renk2 = document.querySelector(".white");
const renk3 = document.querySelector(".blue");
const renk4 = document.querySelector(".black");
const yanlis = document.querySelector("#yanlis");

renk1.innerText = "KIRMIZI";
renk2.innerText = "BEYAZ";
renk3.innerText = "MAVİ";
renk4.innerText = "SİYAH";

let yanlisHali = `<div class="kutu">
<div class="red">SİYAH</div>
<div class="white">KIRMIZI</div>
<div class="blue">BEYAZ</div>
<div class="black">MAVİ</div>
</div>`

yanlis.innerHTML = `<h1 style=color:red;text-align:center>RENKLER</h1> ${yanlisHali}`

