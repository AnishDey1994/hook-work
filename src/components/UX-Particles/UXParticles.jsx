import React from 'react';
import UXButton from '../UX-Button/UXButton';
import Particles from 'react-particles-js';

const UXParticles = (props) => {
    return (
        <div>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 20
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />
            {/* <UXButton type='button' value='Get in touch' class='btn template2Btn' /> */}
        </div>
    );

}
export default UXParticles;