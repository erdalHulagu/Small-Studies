import React from 'react';
import About from './about/about';
import Educations from './educations/educations';
import Experiences from './experiences/experiences';
import Testimonals from './testimonals/testimonals';
import "./main.css";
import GetInTouch from './getintouch/get-in-touch';


const Main = () => {
  return (
    <div className="main-content pull-right">
        <About/>
        <Experiences/>
        <Educations/>
        <Testimonals/>
        <GetInTouch/>
    </div>
  )
}

export default Main