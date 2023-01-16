import React,{useState,useEffect} from 'react'
import {Container,Table,Spinner} from "react-bootstrap"
import data from "./data.json"
import Country from "./country";
const Countries = () => {
   const [countries,setCountries] = useState([]); 
   const [loading,setLoading] = useState(true); 
   useEffect(() => {
     setTimeout(() => {
         setCountries(data);
         setLoading(false);
     }, 2000);
   }, [])
   
   const removeById = (id) => { 
       const isDelete = window.confirm("Silmek istediğinize emin misiniz ?");
       if(isDelete){
           const newArray = countries.filter((country)=>country.ccn3!==id);
           setCountries(newArray);
       }
    }

  return (
    <Container>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Bayrak</th>
                    <th>Ülke</th>
                    <th>Nufus</th>
                    <th>Başkent</th>
                    <th>İşlem</th>
                </tr>
            </thead>
            <tbody>
                <tr><td className={loading ? "d-block" : "d-none"} colspan="6"><Spinner animation="border"/></td></tr>
                {
                    countries.map((country,index)=>(<Country key={index} index={index} {...country} removeById={removeById}/>))
                }
            </tbody>
        </Table>
    </Container>
  )
}

export default Countries