import React from 'react';
import About from './about/about';
import Intro from './about/intro/intro';
import "./main.css";
import SectionHeader from './section-header/section-header';

const Main = () => {
  return (
    <div className="main-content pull-right">
        <About/>
    </div>
  )
}

export default Main