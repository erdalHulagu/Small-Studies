import React, { useState } from 'react'
import data from "./data"
import List from './list';
import "./list.css"
const Listele = () => {
    const [people, setPeople] = useState(data);
    const [geriAl,setGeriAl] =useState(false);
    const bringBack = () => { 
        setPeople(data);
        setGeriAl(!geriAl);
     }
     const clearAll = () => { 
         setPeople([]);
         setGeriAl(!geriAl);
      }
  return (
    <main>
        <section className="container">
            <h3>{people.length} birthdays today</h3>
            <List people={people}/>
            {
                geriAl ? (<button onClick={bringBack}>Bring Back</button>) : (<button onClick={clearAll}>Clear All</button>)
            }
        </section>
    </main>
  )
}

export default Listele