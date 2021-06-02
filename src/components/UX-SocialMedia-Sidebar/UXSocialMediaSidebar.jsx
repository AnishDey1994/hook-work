import React from 'react';
import PropTypes from 'prop-types';
import socialMediaIcon from './iconMapping.js';
import './UXSocialMediaSidebar.scss';

const UXSocialMediaSidebar = props => {
    return (
        <div className='socialSideBarWrapper bg-transparent fixed'>
            <div className='socialSideBarInner'>
                {
                    props.iconList.length > 0 && props.iconList.map((value, k) => (
                        <div key={k} className='icoWrapper'>
                            <a href={value.link} target='_blank'>
                                <img
                                    key={k}
                                    className='socialMediaIconMin'
                                    alt='img'
                                    src={socialMediaIcon.rounded[value.icon]}
                                />
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

UXSocialMediaSidebar.propTypes = {
    //object of array. First value should be social media icon and second value should be link
    iconList: PropTypes.array.isRequired,

    //String value to determine sidebar shape [i.e. : hidden, visible] 
    wrapperType: PropTypes.string,

    //String for background color of sidebar
    color: PropTypes.string
};

export default UXSocialMediaSidebar;