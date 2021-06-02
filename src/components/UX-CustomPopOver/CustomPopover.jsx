import React from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import { FaCalendarPlus } from 'react-icons/fa';
import data from '../../Configs/data.json';
import './CustomePopOver.scss';
const configStrings = data;

const CustomPopOver = (props) => {

    const handleEventClick = (url) => {
        props.eventClickHandler();
    }
    return (
        <Overlay
            show={props.show}
            target={props.target}
            placement={props.placement}
            containerPadding={20}
        >
            <Popover id={props.id && props.id}>
                <Popover.Title as='h3'>
                    <span className='c-mr-1'>{props.title && props.title}</span>
                    <FaCalendarPlus className='toRight addEventButton' />
                </Popover.Title>
                <Popover.Content>
                    {
                        props.content && props.content.length > 0 ?
                            props.content.map((content, k) => (
                                <p
                                    key={k}
                                    onClick={() => handleEventClick()}
                                    className='notificationItem'
                                >
                                    {content}
                                </p>
                            )) :
                            <p key={1}>
                                No Item found
                            </p>
                    }
                </Popover.Content>
                {
                    !props.hideShowAll ?
                        <p className='popoverFooter'>
                            <strong>Show All</strong>
                        </p> : null
                }
            </Popover>
        </Overlay>
    );
}
export default CustomPopOver;