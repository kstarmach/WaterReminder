import React, { useState, useRef, useEffect } from 'react';
import { Modal, Card, CardBody, CardTitle, CardText, CardSubtitle, ModalHeader, ModalBody, ModalFooter, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
// import { getAll, increasePost, update } from '../services/waterreminder'
import WaterCard from './WaterReminder/WaterCard';
import TimerCard from './WaterReminder/TimerCard';
import ReminderModal from './WaterReminder/ReminderModal';

const SettingsModal = ({ toggle, modal }) => {
    return (
        <Modal isOpen={modal} toggle={toggle} size="xl" centered>
            <ModalHeader toggle={toggle}>Settings</ModalHeader>
            <ModalBody>
                <Row>
                    <Col md={6} >
                        <Card color="dark" inverse className='pb-1'>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Settings
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Sex
                                </CardSubtitle>

                                <FormGroup
                                    row
                                    tag="fieldset"
                                >
                                    <Col sm={4}>
                                        <FormGroup check>
                                            <Input
                                                name="radio2"
                                                type="radio"
                                            />
                                            {' '}
                                            <Label check>
                                                Male
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={4}>
                                        <FormGroup check>
                                            <Input
                                                name="radio2"
                                                type="radio"
                                            />
                                            {' '}
                                            <Label check>
                                                Female
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={4}>
                                        <FormGroup check>
                                            <Input
                                                name="radio2"
                                                type="radio"
                                                defaultChecked
                                            />
                                            {' '}
                                            <Label check>
                                                Others
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>


                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Weight
                                </CardSubtitle>

                                <FormGroup>
                                    <Label for="exampleRange">
                                        80 kg
                                    </Label>
                                    <Input
                                        id="exampleRange"
                                        name="range"
                                        type="range"
                                    />
                                </FormGroup>

                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Activity
                                </CardSubtitle>

                                <FormGroup>
                                    <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                        defaultValue="Normal"
                                    >
                                        <option>
                                            Low
                                        </option>
                                        <option >
                                            Normal
                                        </option>
                                        <option>
                                            Acitve
                                        </option>
                                        <option>
                                            Very active
                                        </option>
                                    </Input>
                                </FormGroup>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} >

                        <Card color="dark" inverse className='h-100'>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Preferences
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Cup size
                                </CardSubtitle>
                                <FormGroup
                                    row
                                    tag="fieldset"
                                >
                                    <Col sm={3}>
                                        <FormGroup check>
                                            <Input
                                                name="radio3"
                                                type="radio"
                                            />
                                            {' '}
                                            <Label check>
                                                150 ml
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={3}>
                                        <FormGroup check>
                                            <Input
                                                name="radio3"
                                                type="radio"
                                            />
                                            {' '}
                                            <Label check>
                                                200 ml
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={3}>
                                        <FormGroup check>
                                            <Input
                                                name="radio3"
                                                type="radio"
                                                defaultChecked
                                            />
                                            {' '}
                                            <Label check>
                                                250 ml
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={3}>
                                        <FormGroup check>
                                            <Input
                                                name="radio3"
                                                type="radio"
                                            />
                                            {' '}
                                            <Label check>
                                                300 ml
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                                <Card color="info" >
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            Calculator
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            Daily amount
                                        </CardSubtitle>
                                        <CardText>
                                            2,8 liters
                                        </CardText>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            Daily cups of water (250ml)
                                        </CardSubtitle>
                                        <CardText>
                                            <i className="bi bi-cup-straw" ></i>
                                            <i className="bi bi-cup-straw" ></i>
                                            <i className="bi bi-cup-straw" ></i>
                                            <i className="bi bi-cup-straw" ></i>
                                            <i className="bi bi-cup-straw" ></i>
                                            <i className="bi bi-cup-straw" ></i>
                                            <i className="bi bi-cup-straw" ></i>
                                            <i className="bi bi-cup-straw" ></i>
                                            <i className="bi bi-cup-straw" ></i>
                                            <i className="bi bi-cup-straw" ></i>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </CardBody>
                        </Card>




                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

const WaterReminder = (props) => {
    const timeToAlert = 1200

    const [showSettings, setShowSettings] = useState(false)
    const [modal, setModal] = useState(false)
    const [counter, setCounter] = useState(1)
    const [isRuning, setIsRuning] = useState(false)
    const [timer, setTimer] = useState(timeToAlert)
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

    const toggle = () => {
        setModal(!modal)
    };

    const toggleSettings = () => {
        setShowSettings(!showSettings)
    }

    const time = new Date(timer * 1000).toISOString().substring(14, 19)

    useEffect(() => {
        if (isRuning && timer > 0) {
            document.title = time;
        }
        else {
            document.title = "Drink your water!";
        }
    })

    return (
        <div>
            <Row>
                <Col md={6}>
                    <TimerCard time={time} isRuning={isRuning} handleIsRuning={handleIsRuning} handleReset={handleReset} />
                </Col>

                <Col md={6}>
                    <WaterCard increase={increase} counter={counter} decrease={decrease} />
                </Col>
            </Row>

            <Button color='info' className='mt-2' onClick={toggleSettings}>Show modal</Button>

            <SettingsModal
                toggle={toggleSettings}
                modal={showSettings}
            />

            <ReminderModal
                increase={increase}
                toggle={toggle}
                modal={modal}
            />
        </div>
    );
}

export default WaterReminder;