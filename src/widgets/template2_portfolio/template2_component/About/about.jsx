import React from 'react';
import aboutMeImg from '../../../../Assets/Images/App_img/aboutMe.png';
import './about.scss';
const About = () => {
    return (
        <div className='about_wrapper'>
            <div className='iconArea'>
                <img src={aboutMeImg} alt='aboutme' className='aboutImg'></img>
            </div>
            <div className='textArea'>
                <p className='topicHeading hMid verticalAlign'>About me</p>
                <p className='aboutDescription verticalAlign'>
                    I am a MCA graduate with wide range of software development skills. currently having 3 years of professional experience and eager to share my expertise.
                </p>
            </div>
        </div>
    );
};

export default About;