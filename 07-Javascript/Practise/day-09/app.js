document.querySelector("#btnAdd").addEventListener("click", ()=> {
  const name = document.querySelector("#txtName").value;
  const point = document.querySelector("#txtPoint").value;
  
  if(!name || !point || isNaN(point)) return;
  
  
  const row = createRow(name, point);
  
  document.querySelector("#tblList tbody").prepend(row);
  updateTableRowIndexes();
  updateAverage();
  setTable();
  
});

const createRow = (name, point) => {
  const row = document.createElement("tr");
  row.innerHTML = getRowHTML(name, point);
  
  attachDeleteEventListener(row);
  attachEditEventListener(row);
  attachCancelEventListener(row);
  attachUpdateEventListener(row);
  
  return row;
}

const getRowHTML = (name, point) => {
  return `
        <td>#</td>
        <td>${name}</td>
        <td>${point}</td>
        <td>
          <span class="btn-group-primary">
            <button class="btn btn-link btn-del"><i class="fa-solid fa-trash"></i></button>
            <button class="btn btn-link btn-edit"><i class="fa-solid fa-edit"></i></button>
          </span>
          <span class="btn-group-secondary d-none">
            <button class="btn btn-link btn-update"><i class="fa-solid fa-check"></i></button>
            <button class="btn btn-link btn-cancel"><i class="fa-solid fa-times"></i></button>
          </span>
        </td>`;
}

const attachDeleteEventListener = (el) => {
  el.querySelector(".btn-del").addEventListener("click", (e)=>{
    const name = el.querySelector("td:nth-child(2)").innerText;
    if( confirm(`Are you sure want to delete '${name}'`)){
      el.remove();
      updateTableRowIndexes();
      updateAverage();
      setTable();
    } 
  })
}

const attachEditEventListener = (el) => {
  el.querySelector(".btn-edit").addEventListener("click", ()=> {
    const elName = el.querySelector("td:nth-child(2)");
    const elPoint = el.querySelector("td:nth-child(3)");
    
    elName.contentEditable = true;
    elPoint.contentEditable = true;
    
    elName.dataset.name = elName.innerText;
    elPoint.dataset.point = elPoint.innerText;
    elName.focus();
    
    el.querySelector(".btn-group-primary").classList.toggle("d-none");
    el.querySelector(".btn-group-secondary").classList.toggle("d-none");
  });
}

const attachCancelEventListener = (el) => {
  el.querySelector(".btn-cancel").addEventListener("click", ()=> {
    const elName = el.querySelector("td:nth-child(2)");
    const elPoint = el.querySelector("td:nth-child(3)");
    
    elName.contentEditable = false;
    elPoint.contentEditable = false;
    
    elName.innerText = elName.dataset.name;
    elPoint.innerText = elPoint.dataset.point;
    el.querySelector(".btn-group-primary").classList.toggle("d-none");
    el.querySelector(".btn-group-secondary").classList.toggle("d-none");
  });
}

const attachUpdateEventListener = (el) => {
  el.querySelector(".btn-update").addEventListener("click", ()=> {
    const elName = el.querySelector("td:nth-child(2)");
    const elPoint = el.querySelector("td:nth-child(3)");
    
    elName.contentEditable = false;
    elPoint.contentEditable = false;
    
    updateAverage();
    
    el.querySelector(".btn-group-primary").classList.toggle("d-none");
    el.querySelector(".btn-group-secondary").classList.toggle("d-none");
  });
}

const updateTableRowIndexes = () => {  
  document.querySelectorAll("#tblList tbody tr td:first-child").forEach( (col, index) => {
    col.innerText = index + 1;
  })
}

const updateAverage = () => {  
  const elPoints = Array.from(document.querySelectorAll("#tblList tbody tr td:nth-child(3)"));
    console.log(elPoints);
  const points = elPoints.map( (item) => item.innerText );
  
  const total = points.reduce( (total, point)=> total + Number(point),0 );
  const avg = (total / points.length).toFixed(2);
  document.querySelector("#tblList tfoot td:nth-child(3)").innerText = avg;
}

const setTable = () => {
  const isTableEmpty = document.querySelectorAll("#tblList tbody tr").length>0 ? false : true;
  
  if(isTableEmpty){
    document.querySelector("#tblList .empty-row").classList.remove("d-none");
    document.querySelector("#tblList .summary").classList.add("d-none");
  }
  else{
    document.querySelector("#tblList .empty-row").classList.add("d-none");
    document.querySelector("#tblList .summary").classList.remove("d-none");
  }
}





