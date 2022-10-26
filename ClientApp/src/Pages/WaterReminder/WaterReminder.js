import React, { useState, useRef, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
// import { getAll, increasePost, update } from '../services/waterreminder'
import WaterCard from './components/WaterCard';
import TimerCard from './components/TimerCard';
import ActivityCard from './components/ActivityCard';
import ReminderModal from './components/ReminderModal';
import AddDrinkModal from './components/AddDrinkModal';


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
        <div >
            <Row>
                <Col xs={0} md={3}></Col>
                <Col className='mt-3'>
                    <div className='d-flex justify-content-between '>
                        <p className='fs-1 fw-bolder'>Hi, Kamil! </p>
                        {/* <p className='fs-1 fw-bolder' role='button' onClick={() => setShowSettings(!showSettings)}><i className='bi bi-sliders text-end'></i></p> */}
                    </div>
                </Col>
                <Col ></Col>

            </Row>

            <Row>
                <Col ></Col>
                <Col lg={12} xl={6} className='align-items-stretch'>
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

                <Col ></Col>


            </Row>
            <Row>
                <Col xl={3}></Col>
                <Col lg={6} xl={3}>
                    <ActivityCard />
                </Col>
                <Col lg={6} xl={3}>
                    <WaterCard
                        //increase={increase}
                        //counter={counter}
                        //decrease={decrease}
                        toggle={() => setWaterModal(!waterModal)}
                    />
                </Col>
                <Col xl={3}></Col>
            </Row>

            <AddDrinkModal
                toggle={() => setWaterModal(!waterModal)}
                modal={waterModal} />

            <ReminderModal
                addDrink={addDrink}
                toggle={() => setAlertModal(!alertModal)}
                modal={alertModal}
            />
        </div >
    );
}

export default WaterReminder;