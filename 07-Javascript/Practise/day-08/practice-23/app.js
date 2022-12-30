function sicaklikHesaplama(){

    let tempSecim = document.querySelector("#sayi_deger").value;
    let numberTemp = document.querySelector("#deger").value;

    let result;
    if(tempSecim == 1){
        result = celVeFah(numberTemp);
        document.querySelector(".sonuc").innerHTML = `${result} Fahrenheit`
    }
    else{
        result = fahVeCel(numberTemp);
        document.querySelector(".sonuc").innerHTML = `${result} Celcius`
    }

} 

function celVeFah(celcius){
    let fahrenheit = Math.round(celcius*9/5 + 32); 
    return fahrenheit;
}

function fahVeCel(fahrenheit){
    let celcius = Math.round((fahrenheit-32)*5/9); 
    return celcius;
}


