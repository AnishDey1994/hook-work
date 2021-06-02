import React, { useRef, useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import UXNavBar from '../../components/UX-NavBar/UXNavBar';
import UXParticles from '../../components/UX-Particles/UXParticles';
import Home from './template2_component/Home/home';
import About from './template2_component/About/about';
import TechStack from './template2_component/TechStack/techStack';
import Projects from './template2_component/Projects/projects';
import UXFooter from '../../components/UX-Footer/UXFooter.jsx';
import './template2_portfolio.scss';
import UXButton from '../../components/UX-Button/UXButton';


const Template2_portfolio = (props) => {
    const [toogleShow, toggleHandler] = useState('hide');
    const topRef = useRef(null);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToRef = (currentRef) => {
        console.log('currentRef', currentRef.current);
        currentRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    const executeScroll = (currentLink) => {
        if (currentLink) {
            switch (currentLink) {
                case 'top':
                    scrollToRef(topRef);
                    break;
                case 'home':
                    scrollToRef(homeRef);
                    break;
                case 'about':
                    scrollToRef(aboutRef);
                    break;
                case 'skill':
                    scrollToRef(skillsRef);
                    break;
                case 'project':
                    scrollToRef(projectRef);
                    break;
                case 'contact':
                    scrollToRef(contactRef);
                    break;
                default:
                    scrollToRef(homeRef);
                    break;
            }
        }
    };
    useEffect(() => {
        const scrollFunction = (e) => {
            if (e.target.documentElement.scrollTop > 20 || e.target.documentElement.scrollTop > 20) {
                toggleHandler('show');
            } else {
                toggleHandler('hide');
            }
        };
        window.addEventListener('scroll', (e) => scrollFunction(e));
        return () => window.removeEventListener("scroll", scrollFunction);
    });
    return (
        <div className='portfolio_wrapper' ref={topRef}>
            <UXNavBar handleRedirect={(link) => executeScroll(link)} />
            <div className='body_wrapper'>
                <div className='wrapper_outer c-mt-2 c-mb-2' ref={homeRef}>
                    <Home {...props}/>
                </div>
                <hr />
                <div className='wrapper_outer c-mt-2 c-mb-2' ref={aboutRef}>
                    <About {...props}/>
                </div>
                <hr />
                <div className='wrapper_outer c-mb-2' ref={skillsRef}>
                    <TechStack {...props}/>
                </div>
                <hr />
                <div className='wrapper_outer c-mb-2' ref={projectRef}>
                    <Projects {...props}/>
                </div>
                <div className='particle_wrapper'>
                    <UXParticles {...props}/>
                </div>
                <div className='footer_wrapper' ref={contactRef}>
                    <UXFooter handleRedirect={(link) => executeScroll(link)} />
                </div>
            </div>
            <UXButton
                id='toTopBtn'
                class={`toTopBtn ${toogleShow}`}
                onTap={() => executeScroll('top')}
                value={<FaAngleUp className='btnContentMiddle'/>}
            >
            </UXButton>
        </div>
    );
};
export default Template2_portfolio;