const hourEl = document.querySelector("#clock li:nth-child(1)");
const minuteEl = document.querySelector("#clock li:nth-child(3)");
const secondEl = document.querySelector("#clock li:nth-child(2)");


setInterval( ()=>{
    const dateTime = new Date();
    const hour = dateTime.getHours();
    const minute = dateTime.getMinutes();

    hourEl.innerText = hour;
    minuteEl.innerText = minute;

    secondEl.classList.toggle("hidden");

    

}, 1000 )


