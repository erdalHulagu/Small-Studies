import { searchShows } from "./modules/tvmaze.js";

document.getElementById("txtSearch").addEventListener("input", (e) => {
  const query = e.target.value;

  if (!query || query.length < 3) {
    document.getElementById("tvShows").innerHTML = "";
    return;
  }

  createShows(query);
});

const createShows = (query) => {

  document.getElementById("loading").classList.remove("d-none");  

  searchShows(query, (shows) => {
    let strShows = "";
    shows.forEach((item) => {
      strShows += createShowHTML(item);
    });

    document.getElementById("tvShows").innerHTML = strShows;
    document.getElementById("loading").classList.add("d-none");
  });
};

const createShowHTML = (item) => {
  const { image, name, genres } = item.show;
  return `
    <div class="col">
        <div class="card h-100">
            <img src="${image.medium}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${genres.join("-")}</p>
            </div>
        </div>
    </div>
    `;
};
