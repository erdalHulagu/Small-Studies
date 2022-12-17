//Kullanıcının girdiği yaş ve cinsiyet bilgisine göre askere gidip gidemeyeceğini 
//mesaj olarak bildirin.

let rb_erkek = document.querySelector("#erkek");
let rb_kadin = document.querySelector("#kadin");
let mesaj = document.querySelector("#msg");

function durum(){
    if(mesaj.classList.contains("yesil")){
        mesaj.classList.remove("yesil")
    }
    else if(mesaj.classList.contains("kirmizi")){
        mesaj.classList.remove("kirmizi")
    }
    else if(mesaj.classList.contains("turuncu")){
        mesaj.classList.remove("turuncu")
    }
    let yas = document.querySelector("#yas").value;
    mesaj.classList.remove("invisible");
    if(yas){
        if(yas>=20 && rb_erkek.checked){
            mesaj.innerHTML = `<strong>Askere Gidebilirsiniz</strong>`;
            mesaj.classList.add("yesil")
        }
        else{
            mesaj.innerHTML = `<strong>Askere Gidemezsiniz</strong>`;
            mesaj.classList.add("kirmizi");
        }
    }
    else{
        mesaj.innerHTML = `<strong>Yaş Değeri Giriniz</strong>`;
        mesaj.classList.add("turuncu");
    }
}

function sil(){
    mesaj.innerText = "";
    mesaj.classList.add("invisible");
    rb_erkek.checked = true;
    rb_kadin.checked = false;
    
}