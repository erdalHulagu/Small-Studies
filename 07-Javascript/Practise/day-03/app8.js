//Kullanıcıdan alınan yaş ve ürün fiyat bilgilerine göre 65 yaştan büyük olanalara
//%50 indirim, diğerlerine %10 indirim uygulayarak bunu mesajla gösterelim.
function hesapla(){
    let yas = document.querySelector("#yas").value;
    let fiyat = document.querySelector("#fiyat").value;
    // let indirimliFiyat;
    // Ternary Yöntemi
    let indirimliFiyat = yas>=65 ? fiyat*0.5 : fiyat*0.9;

    //if else yöntemi
    // if(yas>=65)
    // indirimliFiyat=fiyat*0.5;
    // else
    // indirimliFiyat=fiyat*0.9;

    //Short Circuit Yöntemi

    // yas>=65 && (indirimliFiyat=fiyat*0.5);
    // yas<65 && (indirimliFiyat=fiyat*0.9);

    document.querySelector("#mesaj").innerText = `Ürünün indirimli Fiyatı : ${indirimliFiyat}`;

}