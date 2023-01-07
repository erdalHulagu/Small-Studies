import React from 'react'
import SectionHeader from '../section-header/section-header';
import "./about.css";
import Intro from './intro/intro';
import Skills from './skills/skills';

const About = () => {
  return (
    <section id="about" className="about">
        <SectionHeader/>
        <Intro/>
        <Skills/>
    </section>
  )
}

export default About