import { searchShows } from "./modules/tvmaze.js";

document.getElementById("txtSearch").addEventListener("input", (e)=>{
    const query = e.target.value;

    if(!query || query.length<3) return;

    searchShows(query, (shows)=>{
        console.log(shows);
    });
    


});