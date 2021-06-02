import React from 'react';
import reactIcon from '../../../../Assets/Images/App_img/tech_stack/reactjs.png';
import htmlIcon from '../../../../Assets/Images/App_img/tech_stack/html.png';
import cssIcon from '../../../../Assets/Images/App_img/tech_stack/css3.png';
import bootstrapIcon from '../../../../Assets/Images/App_img/tech_stack/bootstrap.png';
import handleBarIcon from '../../../../Assets/Images/App_img/tech_stack/handlebars.png';
import nodeIcon from '../../../../Assets/Images/App_img/tech_stack/nodejs.png';
import phpIcon from '../../../../Assets/Images/App_img/tech_stack/php.png';
import mongoIcon from '../../../../Assets/Images/App_img/tech_stack/mongoDB.png';
import mysqlIcon from '../../../../Assets/Images/App_img/tech_stack/mysql.png';
import './techStack.scss';

const techStackArray = [
    reactIcon,
    htmlIcon,
    cssIcon,
    bootstrapIcon,
    handleBarIcon,
    nodeIcon,
    phpIcon,
    mongoIcon,
    mysqlIcon
];
const TechStack = () => {
    return (
        <div className='tech_stack_wrapper'>
            <h2 className='tech_stack_heading'>Technologies I have used so far</h2>
            {
                techStackArray.length > 0 ?
                    techStackArray.map((icon, k) => (
                        <div key={k} className={`tech_stack_icon ${k === 4 ? 'hbs' : null}`}>
                            <img src={icon} alt={'tech icon'} ></img>
                        </div>
                    ))
                    : null
            }
        </div>
    );
};

export default TechStack;