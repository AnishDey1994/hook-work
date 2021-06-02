import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import {
    FaAngleDoubleLeft,
    FaAngleDoubleRight,
    FaAngleLeft,
    FaAngleRight
} from "react-icons/fa";
import CustomPopOver from '../UX-CustomPopOver/CustomPopover';
import UXLoader from "../UX-Loader/UXLoader";
import data from './UXEventCalendar_Mock.json';
import "./UXEventCalendar.scss";

const days = data.CalendarData.days;
const months = data.CalendarData.months;
const eventData = data.eventData;
const currentDate = new Date();

class EventCalendar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todayDate: currentDate.getFullYear() + "-" + parseInt(currentDate.getMonth() + 1) + "-" + currentDate.getDate(),
            currentYear: currentDate.getFullYear(),
            currentMonth: "",
            currentMonthDays: [],
            preMonthArr: [],
            postMonthArr: [],
            keyDates: {},
            keyDatesArray: [],
            monthHandeler: 0,
            keyDateData: null,

            showPopOver: false,
            popOverTarget: null,
            prevId: '',
            popOverId: '',
            popOveTitle: '',
            popoverContent: [],
            hideShowAll: false
        }
    }
    handelCurrentDate = () => {
        let dayArray = [];
        let weekArray = [];
        let preMonthArr = [];
        let postMonthArr = [];

        for (let m = 0; m < months.length; m++) {
            if (m === this.state.monthHandeler) {
                for (let i = 1; i <= new Date(this.state.currentYear + "-" + parseInt(m + 1) + "-" + 1).getDay(); i++) {
                    preMonthArr.push(<div className="calendarField prevMonth">{months[m].dayCount - new Date(this.state.currentYear + "-" + parseInt(m + 1) + "-" + 1).getDay() + i}</div>);
                }

                for (let i = 1; i <= 6 - new Date(this.state.currentYear + "-" + parseInt(m + 1) + "-" + months[m].dayCount).getDay(); i++) {
                    postMonthArr.push(<div className="calendarField prevMonth">{i}</div>);
                }

                for (let d = 1; d <= months[m].dayCount; d++) {
                    dayArray.push({
                        date: d,
                        dayName: days[new Date(this.state.currentYear + "-" + parseInt(m + 1) + "-" + d).getDay()],
                        fullDate: this.convertKeyDate(this.state.currentYear + "-" + parseInt(m + 1) + "-" + d)
                    })
                }

                this.setState({ currentMonth: months[m].monthName, currentMonthDays: dayArray, weekArray, preMonthArr, postMonthArr })
            }
        }
    }

    convertKeyDate = (date) => {
        let dateSplit = date.split("-");
        let dateYear = dateSplit[0];
        let dateMonth = dateSplit[1] <= 9 ? ("0" + dateSplit[1]) : dateSplit[1];
        let dateDate = dateSplit[2] <= 9 ? "0" + dateSplit[2] : dateSplit[2];
        let dateConverted = dateYear + "-" + dateMonth + "-" + dateDate;
        return dateConverted;
    }

    handelMonthChange = (param) => {
        let monthHandeler = this.state.monthHandeler;

        if (param === true) {
            if (this.state.currentMonth === "December") {
                this.setState({
                    currentYear: this.state.currentYear + 1,
                    monthHandeler: 0,
                }, () => { this.handelCurrentDate() })
            }
            else {
                monthHandeler = monthHandeler + 1;
                this.setState({
                    monthHandeler,
                }, () => { this.handelCurrentDate() })
            }
        }
        else {
            if (this.state.currentMonth === "January") {
                this.setState({
                    currentYear: this.state.currentYear - 1,
                    monthHandeler: 11,
                }, () => { this.handelCurrentDate() })
            }
            else {
                monthHandeler = monthHandeler - 1;
                this.setState({
                    monthHandeler,
                }, () => { this.handelCurrentDate() })
            }

        }

    }

    handelYearChange = (param) => {
        if (param === true) {
            this.setState({
                currentYear: this.state.currentYear + 1,
            }, () => { this.handelCurrentDate() })
        }
        else {
            this.setState({
                currentYear: this.state.currentYear - 1
            }, () => { this.handelCurrentDate() })
        }
    }

    handelError = (err) => {
        let errorMessage = '';
        try {
            errorMessage = err.data.message ? err.data.message : err.data.error_description;
        } catch (err) {
            errorMessage = "No records found."
        }
        return errorMessage;
    }

    getEventByDay = (toDay) => {
        let result = [];
        if (eventData.length > 0) {
            eventData.forEach(eventElement => {
                if (eventElement.date === toDay) {
                    result = eventElement.event;
                }
            })
        }
        return result;
    }

    handleTogglePopover = (e, idString) => {
        let popOverId = idString;
        let popOveTitle = 'On this day';
        let popoverContent = this.getEventByDay(idString);
        let hideShowAll = true;
        this.setState({
            prevId: popOverId,
            popOverId,
            popOveTitle,
            popoverContent,
            showPopOver: this.state.prevId !== idString ? true : !this.state.showPopOver,
            popOverTarget: e.target,
            hideShowAll
        })
    }

    componentDidMount() {
        this.setState({ monthHandeler: currentDate.getMonth() }, () => {
            this.handelCurrentDate();
        })
        console.log("todayDate", this.convertKeyDate(this.state.todayDate));
    }
    render() {
        const {
            popOverId,
            popOveTitle,
            showPopOver,
            popOverTarget,
            popoverContent,
            hideShowAll
        } = this.state;
        const { currentMonth, currentMonthDays, preMonthArr, todayDate, currentYear, postMonthArr, LoaderKeyDate } = this.state;
        return (
            <div className="calendarBlockInner">
                <div className="calendarHeading">

                    {/* Calendar Controller */}
                    <Row>
                        <Col md={{ offset: 1, span: 1 }} sm={{ offset: 1, span: 1 }} xs={{ offset: 1, span: 1 }}>
                            <span onClick={() => this.handelYearChange(false)} className="calenderNavigate">
                                <FaAngleDoubleLeft />
                            </span>
                        </Col>
                        <Col md={1} sm={1} xs={1}>
                            <span onClick={() => this.handelMonthChange(false)} className="calenderNavigate">
                                <FaAngleLeft />
                            </span>
                        </Col>

                        <Col md={6} sm={6} xs={6} className="text-center">
                            {currentMonth}, {currentYear}
                        </Col>

                        <Col md={1} sm={1} xs={1}>
                            <span onClick={() => this.handelMonthChange(true)} className="calenderNavigate">
                                <FaAngleRight />
                            </span>
                        </Col>
                        <Col md={1} sm={1} xs={1}>
                            <span onClick={() => this.handelYearChange(true)} className="calenderNavigate">
                                <FaAngleDoubleRight />
                            </span>
                        </Col>
                    </Row>
                </div>

                {/* Calendar Head */}
                <Row>
                    <Col md={12}>
                        {
                            days.map((day, k) => (
                                <div key={k} className="calendarField">{day}</div>
                            ))
                        }
                    </Col>
                </Row>

                {/* Calendar Body */}

                {
                    LoaderKeyDate ? <UXLoader />
                        :
                        <Row>
                            <Col md={12}>
                                {
                                    preMonthArr.length > 0 && preMonthArr.map(preMonthArr => (
                                        preMonthArr
                                    ))
                                }
                                {
                                    currentMonthDays.map((currMonth, k) => (
                                        days.map(dayHead => (
                                            currMonth.dayName === dayHead ?
                                                <div className="calendarField" key={k}>
                                                    <div
                                                        className={`innerBlock ${this.convertKeyDate(todayDate) === currMonth.fullDate ? "toDay" : null}`}
                                                        onClick={(e) => this.handleTogglePopover(e, currMonth.fullDate)}
                                                    >
                                                        {currMonth.date}
                                                    </div>
                                                </div>
                                                : null
                                        ))
                                    ))
                                }

                                {
                                    postMonthArr.length > 0 && postMonthArr.map(postMonthArr => (
                                        postMonthArr
                                    ))
                                }
                            </Col>
                        </Row >
                }
                <CustomPopOver
                    content={popoverContent}
                    id={popOverId}
                    title={popOveTitle}
                    show={showPopOver}
                    target={popOverTarget}
                    placement={"top"}
                    hideShowAll={hideShowAll}
                    eventClickHandler = {() => console.log('')}
                    {...this.props}
                />
            </div>
        );
    }
}

export default EventCalendar;