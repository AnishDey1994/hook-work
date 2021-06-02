import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import UXTextBox from '../UX-TextBox/UXTextBox';
import UXButton from '../UX-Button/UXButton';
import UXSelect from '../UX-Select/UXSelect';
import './UXForm.scss';

const UXForm = props => {
    const { inputArray, controlArray, formHeading } = props;
    const [formData, updateFormData] = useState({});

    useEffect(() => {
        setInitialData();
    }, []);
    const setInitialData = () => {
        let initFormData = {};
        if (inputArray && inputArray.length > 0) {
            inputArray.forEach(inputArrayElement => {
                initFormData[inputArrayElement.name] = {
                    value: '',
                    validationSchema: inputArrayElement.validation.schema,
                    errorMsg: []
                }
            })
        }
        updateFormData(initFormData);
    }
    const handleChange = (e, schema) => {
        updateFormData(prevFormData => ({
            ...prevFormData,
            [e.target.name]: {
                value: e.target.value,
                validationSchema: schema,
                errorMsg: []
            }
        }))
    };
    const formReset = () => {
        setInitialData();
        props.onCancel();
    };
    const handleFormSubmit = () => {
        props.onSubmit(formData);
        validateForm(formData);
    };
    const validateForm = (form) => {
        let submittedData = form;
        Object.keys(submittedData).forEach(formElement => {
            submittedData[formElement].validationSchema.forEach(schema => {
                switch (schema) {
                    case 'required':
                        if (submittedData[formElement] && submittedData[formElement].value === '') {
                            submittedData[formElement].errorMsg.push('Please enter value');
                        }
                        break;
                    case 'isString':
                        if (typeof submittedData[formElement].value !== 'string') {
                            submittedData[formElement].errorMsg.push('Please string value');
                        }
                        break;
                    case 'isNumber':
                        if (typeof submittedData[formElement].value !== 'number') {
                            submittedData[formElement].errorMsg.push('Please number value');
                        }
                        break;
                }
            })
        });
        updateFormData({ ...submittedData });
        console.log('updated form data', formData)
    }

    return (
        <div className='card-wrapper boxShadow uxForm'>
            <div className='card-head bold c-mb-0'>
                <h5>{formHeading}</h5>
            </div>
            <div className='card-content'>
                <form>
                    {inputArray.length > 0 && inputArray.map((input, k) => (
                        <Row key={k} className='c-mb-2'>
                            {input.type === 'select' ?
                                <Col md={12} sm={12}>
                                    <UXSelect
                                        key={k}
                                        name={input.name}
                                        id={input.name + k}
                                        value={formData[input.name] ? formData[input.name].value : ''}
                                        optionArray={input.optionArray}
                                        onSelect={(e) => handleChange(e, input.validation.schema)}
                                    />
                                    {
                                        formData[input.name] && formData[input.name].errorMsg.length > 0 ?
                                            <span className='fDanger toLeft'>{formData[input.name].errorMsg[0]}</span>
                                            : null
                                    }
                                </Col>
                                :
                                <Col md={12} sm={12}>
                                    <UXTextBox
                                        key={k}
                                        name={input.name}
                                        type={input.type}
                                        id={input.name + k}
                                        value={formData[input.name] ? formData[input.name].value : ''}
                                        placeHolder={input.placeHolder ? input.placeHolder : input.name}
                                        onEnter={(e) => handleChange(e, input.validation.schema)}
                                    />
                                    {
                                        formData[input.name] && formData[input.name].errorMsg.length > 0 ?
                                            <span className='fDanger toLeft'>{formData[input.name].errorMsg[0]}</span>
                                            : null
                                    }
                                </Col>

                            }
                        </Row>
                    ))}

                    <Row className='c-mb-2'>
                        {controlArray.length > 0 && controlArray.map((control, k) => (
                            control.type === 'button' || control.type === 'submit' ?
                                <Col key={k}
                                    md={control.type === 'submit' ? { span: 4, offset: 4, order: 'last' } : { span: 4, order: 'first' }}
                                    sm={12} xs={12} className=''
                                >
                                    <UXButton
                                        key={k}
                                        class={`c-mb-1 ${control.type === 'submit' ? 'btn-primary' : 'btn-danger'}`}
                                        type='button'
                                        value={control.name}
                                        onTap={
                                            control.type === 'submit' ?
                                                () => handleFormSubmit() : () => formReset()
                                        }
                                    />
                                </Col>
                                : null
                        ))}
                    </Row>
                </form>
            </div>
        </div >
    );
};

UXForm.propTypes = {
    //String which will be set as form heading
    formHeading: PropTypes.string.isRequired,

    //object of array. First value should be filed name and second value should be input type
    inputArray: PropTypes.array.isRequired,

    //object of array. First value should be action name and second value should be action type       
    controlArray: PropTypes.array.isRequired,

    //function for submitting the form 
    onSubmit: PropTypes.func,

    //function for reseting the form 
    onCancel: PropTypes.func
};

export default UXForm;