import React, { useState, useRef, useEffect } from 'react';
import { Modal, Card, CardBody, CardTitle, CardText, CardSubtitle, ModalHeader, ModalBody, ModalFooter, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
// import { getAll, increasePost, update } from '../services/waterreminder'
import WaterCard from './WaterReminder/WaterCard';
import TimerCard from './WaterReminder/TimerCard';
import ReminderModal from './WaterReminder/ReminderModal';
import SettingsModal from './WaterReminder/SettingsModal';


const WaterReminder = (props) => {
    const timeToAlert = 1200

    const [showSettings, setShowSettings] = useState(false)
    const [modal, setModal] = useState(false)
    const [counter, setCounter] = useState(1)
    const [isRuning, setIsRuning] = useState(false)
    const [timer, setTimer] = useState(timeToAlert)
    const [time, setTime] = useState('20:00')
    const tick = useRef()

    // useEffect(() => {
    //     getAll()
    //         .then(response => setCounter(response))
    // }, [])

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
        setModal(true)
    }

    const increase = () => {
        // increasePost().then(response => setCounter(response))
        setCounter(counter + 1)
        setIsRuning(true)
        setTimer(timeToAlert)
        setModal(false)
    }

    const decrease = () => {
        // update(counter - 1).then(response => {
        //     setCounter(response)
        // })
        setCounter(counter - 1)
    }

    useEffect(() => {
        setTime(new Date(timer * 1000).toISOString().substring(14, 19))
    }, [timer])


    useEffect(() => {
        if (isRuning && timer > 0) {
            document.title = time;
        }
        else {
            document.title = "Drink your water!";
        }
    }, [timer, isRuning])

    return (
        <div>
            <div className='d-flex justify-content-between '>
                <p className='fs-1 fw-bolder'>Hi, Kamil! </p>
                <p className='fs-1 fw-bolder' role='button' onClick={() => setShowSettings(!showSettings)}><i className='bi bi-sliders text-end'></i></p>
            </div>



            <Row>
                <Col md={6}>
                    <TimerCard time={time} isRuning={isRuning} handleIsRuning={() => setIsRuning(!isRuning)} handleReset={handleReset} />
                </Col>

                <Col md={6}>
                    <WaterCard increase={increase} counter={counter} decrease={decrease} />
                </Col>
            </Row>


            <SettingsModal
                toggle={() => setShowSettings(!showSettings)}
                modal={showSettings}
            />

            <ReminderModal
                increase={increase}
                toggle={() => setModal(!modal)}
                modal={modal}
            />
        </div>
    );
}

export default WaterReminder;