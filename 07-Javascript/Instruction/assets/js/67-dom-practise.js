import { students } from "../data/students.js";

const tblStudentsTbody = document.querySelector("#tblStudents tbody");


/* EVENTS */
document.getElementById("btnShowLowScores").addEventListener("click", ()=>{
    const lastTDs = tblStudentsTbody.querySelectorAll("tr td:last-child");
    console.log(lastTDs);

    lastTDs.forEach( (td, index)=> {
        if(td.innerText<50){
            //td.style.backgroundColor = "red";
            tblStudentsTbody.querySelector(`tr:nth-child(${index+1})`).style.backgroundColor = "red";
        }
    })


});

/* EVENTS */

const loadData = () => {
  let strHtml = "";

  students.forEach((student, index) => {
    strHtml += `<tr>
        <th scope="row">${index+1}</th>
        <td>${student.name}</td>
        <td>${student.point}</td>
      </tr>`;
  });

  tblStudentsTbody.innerHTML = strHtml;
};






loadData();
