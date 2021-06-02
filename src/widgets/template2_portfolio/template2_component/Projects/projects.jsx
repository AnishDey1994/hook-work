import React from 'react';
import hookWorkIcon from '../../../../Assets/Images/App_img/logoHK1.gif';
import flowToFabIcon from '../../../../Assets/Images/App_img/logoF2F.gif';
import bpIcon from '../../../../Assets/Images/App_img/logoBP.gif';
import './projects.scss';

const Projects = (props) => {
    console.log('this.props', props);
    const handleRedirect = (url) => {
        props.history.push(url);
    }
    return (
        <div className='projects_wrapper'>
            <h2 className='projects_heading'>Projects I have done individually</h2>

            <div className='project_item c-mb-2'>
                <div className='project_icon'>
                    <img src={hookWorkIcon} alt='icon'></img>
                </div>
                <div className='project_description'>
                    <h4>Hook Work</h4>
                    <p>This is a react lighweight framework which makes your life easy to develope react project.</p>
                    <p>It includes verious small component and UI snippets. Example: Event callender, JSON form, Social media side menu.</p>
                    <span className='projectLink' onClick={() => handleRedirect('/demo')}>Live Demo</span>
                </div>
            </div>

            <div className='project_item c-mb-2'>
                <div className='project_icon'>
                    <img src={flowToFabIcon} alt='icon' className='borderd'></img>
                </div>
                <div className='project_description'>
                    <h4>Flow to Fab</h4>
                    <p>Multiplatform responsive blog template made by <span className='projectLink'>Hook Work</span>.</p>
                    <p>People can read about the blog which author posted form the bellow blogger tool - <span className='projectLink'>Blogger palette</span>.</p>
                    <span className='projectLink disabled'>Live Demo</span>
                </div>
            </div>

            <div className='project_item c-mb-2'>
                <div className='project_icon'>
                    <img src={bpIcon} alt='icon'></img>
                </div>
                <div className='project_description'>
                    <h4>Blogger palette</h4>
                    <p>This is a blog management tool made for any blogger who want to start their blog site right away.</p>
                    <p>Its a very easy to use and very lighweight tool which provide power to create, customize and maintain your blog site.</p>
                    <span className='projectLink disabled'>Live Demo</span>
                </div>
            </div>
        </div>
    );
};

export default Projects;