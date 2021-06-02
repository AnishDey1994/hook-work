import React from 'react';
import banner1 from '../../../../Assets/Images/App_img/banner1.png';
import workdesk from '../../../../Assets/Images/App_img/workdesk.png';
import responsiveApp from '../../../../Assets/Images/App_img/responsiveApp.png';
import './home.scss';
const Home = () => {
    return (
        <div className='homeWrapper'>
            <div className='banner_wrapper'>
                <img src={banner1} alt='banner' className='banner_fullwidth'></img>
            </div>

            <div className='description_wrapper'>
                <div className='description_item'>
                    <div className='description_text'>
                        <h3 className='toCenter'>Develop what you need</h3>
                        <p>I'm a developer, I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.</p>
                    </div>
                </div>
                <div className='description_item c-ml-2'>
                    <img src={workdesk} alt='banner' className='description_img'></img>
                </div>
            </div>
            <div className='description_wrapper'>
                <div className='description_item'>
                    <img src={responsiveApp} alt='banner' className='description_img'></img>
                </div>
                <div className='description_item c-ml-2'>
                    <div className='description_text'>
                        <h3 className='toCenter'>Design what you want</h3>
                        <p>I know how to create your website to run across devices using the latest technologies available.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;