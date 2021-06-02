import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import UXButton from '../../components/UX-Button/UXButton';
import UXTextBox from '../../components/UX-TextBox/UXTextBox';
import UXForm from '../../components/UX-Form/UXForm';
import UXSelect from '../../components/UX-Select/UXSelect';
// import UXLoader from '../../components/UX-Loader/UXLoader';
import UXEventCalendar from '../../components/UX-Event-Calendar/UXEventCalendar';
import data from '../../Configs/data.json';
const configString = data.demoValue;

const ComponentDemo = () => {
    const [name, setName] = useState({ firstName: '', lastName: '' });
    const [formType, setFormType] = useState('registration');

    const handleSubmit = (formData) => {
        console.log('submitting FormData...', formData);
    }
    useEffect(() => {
        console.log('formType : ', formType);
    }, [formType])
    return (
        <div>
            {/* <UXLoader fullPageOverlay={false}/> */}
            <div className='card-wrapper c-mb-2 boxShadow'>
                <div className='card-head'>
                    Basic Button Demo
				</div>
                <div className='card-content'>
                    <UXButton class='btn-primary c-ml-2 c-mb-1' type='button' value='Click Me' onTap={() => alert('calling..')} />
                    <UXButton class='btn-secondary c-ml-2 c-mb-1' type='button' value='Click Me' onTap={() => alert('calling..')} />
                    <UXButton class='btn-success c-ml-2 c-mb-1' type='button' value='Click Me' onTap={() => alert('calling..')} />
                    <UXButton class='btn-warning c-ml-2 c-mb-1' type='button' value='Click Me' onTap={() => alert('calling..')} />
                    <UXButton class='btn-danger c-ml-2 c-mb-1' type='button' value='Click Me' onTap={() => alert('calling..')} />
                    <UXButton class='btn-clean c-ml-2 c-mb-1' type='button' value='Click Me' onTap={() => alert('calling..')} />
                </div>
            </div>

            <div className='card-wrapper c-mb-2 boxShadow'>
                <div className='card-head'>
                    Input Box Demo
				</div>
                <div className='card-content'>
                    <Row className='c-mb-2'>
                        <Col md={4} sm={12}>
                            <UXTextBox
                                value={name.firstName}
                                onEnter={(e) => setName({ ...name, firstName: e.target.value })}
                                placeHolder='Enter first name'
                            />
                        </Col>
                        <Col md={4} sm={12}>
                            <span className='bold fInfo'>{name.firstName}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} sm={12}>
                            <UXTextBox
                                value={name.lastName}
                                onEnter={(e) => setName({ ...name, lastName: e.target.value })}
                                placeHolder='Enter Last name'
                            />
                        </Col>
                        <Col md={4} sm={12}>
                            <span className='bold fInfo'>{name.lastName}</span>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='card-wrapper c-mb-2 boxShadow'>
                <div className='card-head'>
                    <Row>
                        <Col md={10} sm={6}>Form Demo</Col>
                        <Col md={2} sm={6}>
                            <UXSelect
                                // id='formSelection'
                                value={formType}
                                onSelect={(e) => setFormType(e.target.value)}
                                optionArray={configString.optionArray}
                            />
                        </Col>
                    </Row>
                </div>
                <div className='card-content'>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }} sm={12}>
                            <UXForm
                                id='form-demo'
                                formHeading={formType}
                                inputArray={
                                    formType && formType === 'Login' ?
                                        configString.loginInputArray : configString.regInputArray
                                }
                                controlArray={configString.controlArray}
                                onSubmit={(formData) => handleSubmit(formData)}
                                onCancel={() => console.log('Reseting form ..')}
                            />
                        </Col>
                    </Row>
                </div>
            </div>

            <div className='card-wrapper c-mb-2 boxShadow'>
                <div className='card-head'>
                    Event Calender Demo
				</div>
                <div className='card-content'>
                    <UXEventCalendar />
                </div>
            </div>
        </div>
    );
};

export default ComponentDemo;