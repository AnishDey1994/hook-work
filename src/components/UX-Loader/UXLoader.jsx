import React from 'react';
import PropTypes from 'prop-types';
import './UXLoader.scss';
const UXLoader = props => {
    return (
        <div className={props.fullPageOverlay ? 'fullPageOverlay' : null}>
            <div className='loaderWrapper'>
                <div className='loader'></div>
            </div>
        </div>
    );
};

UXLoader.propTypes = {

};

export default UXLoader;