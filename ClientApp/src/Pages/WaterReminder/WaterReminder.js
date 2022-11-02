import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Container, Button, Label } from 'reactstrap';
import { Card, CardBody, CardTitle } from 'reactstrap';
// import { getAll, increasePost, update } from '../services/waterreminder'
import WaterCard from './components/WaterCard';
import TimerCard from './components/TimerCard';
import ActivityCard from './components/ActivityCard';
import ReminderModal from './components/ReminderModal';
import AddDrinkModal from './components/AddDrinkModal';
// import DailyGoalsCard from '../Statistics/components/DailyGoalsCard';

import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";

const WaterReminder = (props) => {
    //Water Counter
    //const [counter, setCounter] = useState(0)
    const [waterModal, setWaterModal] = useState(false);

    //Timer
    const [isRuning, setIsRuning] = useState(false)
    const [timeToAlert, setTimeToAlert] = useState(1200)
    const [timer, setTimer] = useState(timeToAlert)
    const tick = useRef()
    const inteRef = useRef()

    //Show modals
    const [alertModal, setAlertModal] = useState(false)
    // const [showSettings, setShowSettings] = useState(false)


    //////////////////
    /// Timer Card ///
    //////////////////
    useEffect(() => {
        if (isRuning) {
            tick.current = setInterval(() => {
                setTimer((timer) => timer - 1)
            }, 1000);
        } else {
            clearInterval(tick.current)
        }
    }, [isRuning])

    const handleReset = () => {
        clearInterval(tick.current)
        setIsRuning(false)
        setTimer(timeToAlert)
    }

    if (timer <= 0) {
        handleReset()
        setAlertModal(true)
    }

    const increaseTimeToAlert = () => {
        let newTimeToAlert = timeToAlert;
        if (inteRef.current) return;
        if (timer <= 3600) {
            handleReset()
            inteRef.current = setInterval(() => {
                newTimeToAlert += 60;

                if (newTimeToAlert >= 3600) {
                    return;
                }
                setTimeToAlert((prevTimer) => prevTimer + 60)
                setTimer((prevTimer) => prevTimer + 60)
            }, 100);
        }
    }

    const decreaseTimeToAlert = () => {
        let newTimeToAlert = timeToAlert;
        if (inteRef.current) return;

        if (timer > 120) {
            handleReset()
            inteRef.current = setInterval(() => {
                newTimeToAlert -= 60;
                if (newTimeToAlert < 60) {
                    return;
                }
                setTimeToAlert((prevTimer) => prevTimer - 60)
                setTimer((prevTimer) => prevTimer - 60)
            }, 100);
        }
    }

    const stopChangeTimeToAlert = () => {
        if (inteRef.current) {
            clearInterval(inteRef.current);
            inteRef.current = null
        }
    }

    //////////////////
    /// Water Card ///
    //////////////////
    const increase = () => {
        //setCounter(counter + 1)
        setIsRuning(true)
        setTimer(timeToAlert)
        setAlertModal(false)

    }

    const addDrink = () => {
        setAlertModal(false)
        setWaterModal(true)
    }

    useEffect(() => {
        increase()
    }, [localStorage.getItem("water_count")])

    // const decrease = () => {
    //     setCounter(counter - 1)
    // }


    return (
        <Container className='mt-3'>
            <Row>

                <Col >

                    <p className='fs-1 fw-bolder'>Hi, Kamil! </p>

                </Col>


            </Row>

            <Row>
                <Col >
                    <Card  color='info'>
                        <CardBody>

                            <Row>

                                <Col>

                                    <p className='fs-4 '>Its's <b>Sunny Day </b> today!</p>
                                    <p className='fs-2 fw-bolder' ><i className="bi bi-sun-fill me-3" style={{color:'yellow'}}></i>26 °C</p>
                                </Col>

                            </Row>

                        </CardBody>
                    </Card>

                    <Card style={{ backgroundColor: '#3F42AE', borderColor: '#3F42AE' }}>
                        <CardBody>

                            <CardTitle>
                                <p className='fs-4 fw-bold text-white'>Your Intake Goal</p>
                                <p className='fs-3 fw-bolder text-white'>1200 ml / 3500 ml</p>
                            </CardTitle>
                        </CardBody>
                    </Card>

                    <div className='h-100' >
                        <div className='text-center fs-4 fw-bolder'>
                            <Label className='text-muted fw-bold'>Add new drink</Label>
                        </div>
                        <div className='text-center fs-1 ' >
                            <i
                                role='button'
                                onClick={() => setWaterModal(!waterModal)}
                                //onClick={increase}
                                className="bi bi-plus-circle-fill   fs-1"
                                style={{ color: 'orange' }}
                            ></i>

                        </div>
                    </div>



                </Col>
                <Col lg={12} xl={6} >
                    <TimerCard
                        timer={timer}
                        isRuning={isRuning}
                        timeToAlert={timeToAlert}
                        handleIsRuning={() => setIsRuning(!isRuning)}
                        handleReset={handleReset}
                        increaseTime={increaseTimeToAlert}
                        decreaseTime={decreaseTimeToAlert}
                        stopChangeTime={stopChangeTimeToAlert}
                    />


                </Col>
                <Col>
                    <ActivityCard />
                    {/* <WaterCard toggle={() => setWaterModal(!waterModal)} /> */}
                </Col>
            </Row>

            {/* <Row>

                <Col>
                    <DailyGoalsCard />

                </Col>
            </Row> */}

            <AddDrinkModal
                toggle={() => setWaterModal(!waterModal)}
                modal={waterModal} />

            <ReminderModal
                addDrink={addDrink}
                toggle={() => setAlertModal(!alertModal)}
                modal={alertModal}
            />
        </Container >
    );
}

export default WaterReminder;