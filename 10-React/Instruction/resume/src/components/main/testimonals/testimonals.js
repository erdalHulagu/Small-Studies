import React from 'react'
import SectionHeader from '../section-header/section-header'
import Testimonal from './testimonal';
import testimonals from "./testimonals.json";
import "./testimonals.css";

const Testimonals = () => {
  return (
    <section id="testimonials" className="testimonials">
        <SectionHeader title="Tetimonals" isButtonVisible={false} />
        <div className="testimonial-carousel">
            {
                testimonals.map( (testimonal, i)=> <Testimonal {...testimonal} key={i}/> )
            }
        </div>
    </section>
  )
}

export default Testimonals