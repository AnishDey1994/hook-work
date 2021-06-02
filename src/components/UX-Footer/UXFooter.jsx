import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FiMail } from 'react-icons/fi';
import { MdCall } from 'react-icons/md';
import { FaFacebookF, FaPinterestP, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './UXFooter.scss';

class UXFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    linkRedirection = (linkName) => {
        this.props.handleRedirect(linkName);
    }
    render() {
        return (
            <div className='container-fluid footerContainer'>
                <Row className='footerInner'>
                    <Col md={4} sm={12} xs={12}>
                        <h4>Imp Link</h4>
                        <ul>
                            <li onClick={() => this.linkRedirection('home')}>HOME</li>
                            <li onClick={() => this.linkRedirection('about')}>ABOUT ME</li>
                            <li onClick={() => this.linkRedirection('skill')}>SKILL</li>
                            <li onClick={() => this.linkRedirection('project')}>PROJECT</li>
                            <li onClick={() => this.linkRedirection('contact')}>CONTACT</li>
                        </ul>
                    </Col>
                    <Col md={4} sm={12} xs={12}>
                        <h4>Follow Me</h4>
                        <ul className='floatLeft'>
                            <li>
                                <Link to='/'><FaFacebookF /></Link>
                            </li>
                            <li>
                                <Link to='/'><FaPinterestP /></Link>
                            </li>
                            <li>
                                <Link to='/'><FaInstagram /></Link>
                            </li>
                            <li>
                                <Link to='/'><FaYoutube /></Link>
                            </li>
                            <li>
                                <Link to='/'><FaLinkedinIn /></Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4} sm={12} xs={12}>
                        <h4>Contacts</h4>
                        <ul>
                            <li>
                                <p><FiMail />&nbsp;info@hookwork.com</p>
                            </li>
                            <li>
                                <p><MdCall />&nbsp; +91 7980720475</p>
                            </li>
                            <li>
                                <p><MdCall />&nbsp; +91 8586944079</p>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className='bottomSection'>
                    <Col md={12} sm={12} xs={12}>
                        <span>&copy;&nbsp;{new Date().getFullYear()}&nbsp;Copyright: hookwork.com</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default UXFooter;
