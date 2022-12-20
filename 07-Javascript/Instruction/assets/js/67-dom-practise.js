import { students } from "../data/students.js";

const loadData = () => {
    let strHtml = "";

    students.forEach( (student, index)=> {
        strHtml +=  `<tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
      </tr>`;
    } )



}