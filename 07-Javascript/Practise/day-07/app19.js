/* Kullanıcın girdiği karakter sayısını sayan bir sayaç yapalım.
Reset butonumuz inputu ve sayacı sıfırlasın.
sayfa açıldığında 3 sn içinde bir şey yazmasa
"Haydi söyle" mesajı gelsin, yazmaya başlayınca da mesaj silinsin. */

const karakterSay = () => { 
    const sayac = document.querySelector(".sayac");
    const giris = document.querySelector("#giris");
    const resetBtn = document.querySelector("#sil");
    const mesaj = document.querySelector(".msj");

    giris.addEventListener("input",()=>{
        mesaj.innerHTML = "";
        sayac.innerHTML = giris.value.length;
    })

    resetBtn.addEventListener("click",()=>{
        sayac.innerHTML = "0";
        karakterSay();
    })

    setTimeout(()=>{
        if(giris.value) return;
        mesaj.innerHTML = "<b>Haydi Söyle</b>";
    },3000)
 }


 karakterSay();