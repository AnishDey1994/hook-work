import React from 'react';
import appLogo from '../../Assets/Images/App_img/ADIcon.png';
import './UXNavBar.scss';

const UXNavBar = props => {
    // const forwordRefDiv = React.forwardRef(UXNavBar);
    const toggleBodyClass = (className) => {
        document.body.classList.toggle(className);
    }
    const linkRedirection = (linkName) => {
        toggleBodyClass('menu-active');
        props.handleRedirect(linkName);
    }
    const logoText = 'AD';
    return (
        <nav className='uxNavBar'>
            <div className='uxNavLeft'>
                <a className='uxNavHeader' href='/'>
                    <img src={appLogo} alt='logo' class='appLogo'></img>
                </a>
            </div>
            <div className='uxNavRight'>
                <div className='uxNavCollapse'>
                    <span className='uxNavItem' onClick={() => linkRedirection('home')}>HOME</span>
                    <span className='uxNavItem' onClick={() => linkRedirection('about')}>ABOUT</span>
                    <span className='uxNavItem' onClick={() => linkRedirection('skill')} >SKILL</span>
                    <span className='uxNavItem' onClick={() => linkRedirection('project')}>PROJECT</span>
                    {/* <span className='uxNavItem' href='/Link2'>BLOG</span> */}
                    <span className='uxNavItem' onClick={() => linkRedirection('contact')}>CONTACT</span>
                </div>
                <button
                    type='button'
                    id='menu-toggler'
                    data-class='menu-active'
                    className='hamburger'
                    onClick={() => toggleBodyClass('menu-active')}>
                    <span className='hamburger-line hamburger-line-top'></span>
                    <span className='hamburger-line hamburger-line-middle'></span>
                    <span className='hamburger-line hamburger-line-bottom'></span>
                </button>

            </div>
        </nav>
    );
};

export default UXNavBar;