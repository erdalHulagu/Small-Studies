//Kullanıcının girdiği iki adet sayının OKEK'ini bulup mesaj olarak yazdırın.

const okekBul = ()=>{
    let sayi1 = document.querySelector("#sayi1").value;
    let sayi2 = document.querySelector("#sayi2").value;
    let mesaj =document.querySelector("#sonuc");

    if(sayi1>sayi2){
        let temp = sayi1;
        sayi1 = sayi2;
        sayi2=temp;
    }

    for(let i=sayi2;i<=sayi1*sayi2;i++){ //25 65
        if(i%sayi1==0 && i%sayi2==0){
            mesaj.innerHTML = `<b>${sayi1} ve ${sayi2} sayılarının OKEK'i = ${i}`;
            break;
        }
    }

}