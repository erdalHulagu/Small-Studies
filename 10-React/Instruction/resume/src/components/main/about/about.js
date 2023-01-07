import React from 'react'
import SectionHeader from '../section-header/section-header';
import "./about.css";
import Intro from './intro/intro';

const About = () => {
  return (
    <section id="about" className="about">
        <SectionHeader/>
        <Intro/>
    </section>
  )
}

export default About