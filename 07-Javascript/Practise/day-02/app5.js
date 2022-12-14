let mode = true;

function degistir(){
    const icerik = document.querySelector("#icerik").classList;
    const buton = document.querySelector("#btn-degistir").classList;
    if(mode){
        icerik.remove("renk1");
        icerik.add("renk2");
        buton.remove("renk2");
        buton.add("renk1");
    }
    else{
        icerik.remove("renk2");
        icerik.add("renk1");
        buton.remove("renk1");
        buton.add("renk2");
    }
    mode = !mode;
}