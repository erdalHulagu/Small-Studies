import React from 'react'
import data from "./data"
const Paragraf = () => {
    const [count, setcount] = useState(0);
  return (
    <section className="section-center">
        <h3>Kaç Tane Paragraf</h3>
        <form action="">
            <label htmlFor="amount">Paragraphs</label>
            <input type="number" id="amount" />
            <button className="btn">Generate</button>
            <button className="btn btn-danger">Clear</button>
        </form>
        <div className="lorem-text">

        </div>
    </section>
  )
}

export default Paragraf