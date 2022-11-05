import { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardTitle, CardText, Col, Row, Container } from 'reactstrap';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TimerButton = ({ isRuning, handleIsRuning }) => {

    if (!isRuning) {
        return (
            <Button onClick={handleIsRuning} color="white" >
                <i className="bi bi-play-circle-fill text-success fs-3" ></i>
            </Button>
        )
    }
    return (
        <Button onClick={handleIsRuning} color="white" >
            <i className="bi bi-stop-circle-fill text-danger fs-3"></i>
        </Button>
    )
}

const TimerCard = (
    {
        timer,
        timeToAlert,
        handleIsRuning,
        isRuning,
        handleReset,
        increaseTime,
        decreaseTime,
        stopChangeTime
    }) => {

    const [displayTime, setDisplayTime] = useState('20:00')
    const [timePercentage, setTimePercentage] = useState(100)
    useEffect(() => {
        setDisplayTime(new Date(timer * 1000).toISOString().substring(14, 19))
        setTimePercentage(100 * (timer / timeToAlert))
    }, [timer, timeToAlert])

    useEffect(() => {
        if (timer > 0) {
            document.title = displayTime;
        }
        else {
            document.title = "Drink your water!";
        }
    }, [timer, displayTime])



    return (
        <Card className='h-100 shadow'>
            <CardBody>
                <CardTitle >
                    <p className='fs-4 fw-bolder'>Timer</p>

                </CardTitle>
                <Container >

                    <Row className='justify-content-center'>

                        <Col style={{ maxWidth: "300px" }}>

                            <CircularProgressbarWithChildren
                                value={timePercentage}
                                valueStart={0}
                                counterClockwise
                                className='d-flex justify-content-center'
                                styles={buildStyles({
                                    backgroundColor: '#3e98c7',
                                    pathColor: `#0d6efd`,
                                })}
                            >
                                <CardText className=' text-center fs-2'>
                                    <i
                                        className="bi bi-dash-circle-dotted me-4 "
                                        role='button'
                                        onMouseDown={decreaseTime}
                                        onMouseUp={stopChangeTime}
                                    ></i>
                                    <span className=' fw-bolder'>{displayTime}</span>
                                    <i
                                        className="bi bi-plus-circle-dotted ms-4 "
                                        role='button'
                                        onMouseDown={increaseTime}
                                        onMouseUp={stopChangeTime}
                                    ></i>
                                </CardText>
                            </CircularProgressbarWithChildren>

                            <Row className=' text-center'>
                                <Col>
                                    <Button
                                        color="white"
                                        className="ms-2"
                                        onClick={handleReset}
                                    >
                                        <i className="bi bi-arrow-counterclockwise fs-3"></i>
                                    </Button>
                                </Col>
                                <Col>
                                    <TimerButton
                                        handleIsRuning={handleIsRuning}
                                        isRuning={isRuning} />
                                </Col>
                            </Row>
                        </Col>

                    </Row>



                </Container>

            </CardBody>
        </Card>
    )
}

export default TimerCard