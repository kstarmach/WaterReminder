import React, { useState, useRef, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';


const ReminderModal = ({ increase, toggle, modal }) => {
    return (
        <Modal isOpen={modal} toggle={toggle} size="xl" centered>
            <ModalHeader toggle={toggle}>Water Reminder</ModalHeader>
            <ModalBody>
                <video controls autoPlay loop muted height="100%" width="100%">
                    <source src='media/WaterReminder.mp4' type='video/mp4' />
                </video>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={increase}>
                    <i className="bi bi-cup-straw"></i> Drinking
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

const TimerButton = ({ isRuning, handleIsRuning }) => {

    if (!isRuning) {
        return (
            <Button onClick={handleIsRuning} color="success" >
                <i className="bi bi-stopwatch"></i> START
            </Button>
        )
    }
    return (
        <Button onClick={handleIsRuning} color="danger" >
            <i className="bi bi-stopwatch"></i> STOP
        </Button>
    )
}

const TimerCard = ({ time, handleIsRuning, isRuning, handleReset }) => {


    return (
        <Card color="light">
            <CardBody>
                <CardTitle tag="h5">
                    Timer
                </CardTitle>

                <CardText className='fs-1 fw-bolder'>
                    {time}
                </CardText>

                <TimerButton handleIsRuning={handleIsRuning} isRuning={isRuning} />
                <Button color="secondary" className="ms-2" onClick={handleReset}>RESET</Button>
            </CardBody>
        </Card>
    )
}

const WaterCard = ({ increase, counter }) => {
    const cups = () => {
        let cup = []
        for (let index = 0; index < counter; index++) {
            cup.push(<i className="bi bi-cup-straw" key={index}></i>)
        }
        return cup
    }

    return (
        <Card color="light">
            <CardBody>
                <CardTitle tag="h5">
                    Counter
                </CardTitle>
                <CardText className='fs-1 fw-bolder'>
                    <b>{cups()}</b>
                </CardText>
                <Button onClick={increase} color="primary" >
                    Increase cups
                </Button>
            </CardBody>
        </Card>
    )
}

function WaterReminder(props) {
    const timeToAlert = 1200

    const [modal, setModal] = useState(false)
    const [counter, setCounter] = useState(1)
    const [isRuning, setIsRuning] = useState(false)
    const [timer, setTimer] = useState(timeToAlert)
    const tick = useRef()

    useEffect(() => {
        if (isRuning) {
            tick.current = setInterval(() => {
                setTimer((timer) => timer - 1)
            }, 1000);
        } else {
            clearInterval(tick.current)
        }
    }, [isRuning])

    const handleIsRuning = () => {
        setIsRuning(!isRuning)
    }

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
        setCounter(counter + 1)
        setIsRuning(true)
        setTimer(timeToAlert)
        setModal(false)
    }

    const toggle = () => {
        setModal(!modal)
    };

    const time = new Date(timer * 1000).toISOString().substring(14, 19)

    useEffect(() => {
        if (isRuning) {
            document.title = time;
        }
    })

    return (
        <div>

            <Row>
                <Col md={6}>
                    <TimerCard time={time} isRuning={isRuning} handleIsRuning={handleIsRuning} handleReset={handleReset} />
                </Col>

                <Col md={6}>
                    <WaterCard increase={increase} counter={counter} />
                </Col>
            </Row>

            <ReminderModal
                increase={increase}
                toggle={toggle}
                modal={modal}
            />
        </div>
    );
}

export default WaterReminder;