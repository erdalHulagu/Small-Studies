import { sSortASC, sSortDESC,nSortASC,nSortDESC } from "./modules/sorting.js";

const arr = ["Ali", "Veli", "Şeyma", "Çiçek", "Bülent","Veli"];
const numArr = [12,4,67,2,67,222,4,776,3];

document.getElementById("btn1").addEventListener("click", ()=>{
    
    const newArr = sSortASC(arr);
    console.log(arr);
    console.log(newArr);

});

document.getElementById("btn2").addEventListener("click", ()=>{
    const newArr = sSortDESC(arr);
    console.log(arr);
    console.log(newArr);
});

document.getElementById("btn3").addEventListener("click", ()=>{
    const newArr = nSortASC(numArr);
    console.log(numArr);
    console.log(newArr);
});

document.getElementById("btn4").addEventListener("click", ()=>{
    const newArr = nSortDESC(numArr);
    console.log(numArr);
    console.log(newArr);
});