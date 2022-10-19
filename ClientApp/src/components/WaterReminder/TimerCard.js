import { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardTitle, CardText, Progress } from 'reactstrap';

const TimerButton = ({ isRuning, handleIsRuning }) => {

    if (!isRuning) {
        return (
            <Button onClick={handleIsRuning} color="white" >
                {/* <i className="bi bi-stopwatch"></i> START */}
                <i className="bi bi-play-circle-fill text-success fs-3" ></i>
            </Button>
        )
    }
    return (
        <Button onClick={handleIsRuning} color="white" >
            {/* <i className="bi bi-stopwatch"></i> STOP */}
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
        <Card>
            <CardBody>
                <CardTitle className=' d-flex justify-content-between'>
                    <p className='fs-4 fw-bolder'>Timer</p>
                    <i className="bi bi-gear-fill text-muted mt-2" role="button"></i>
                </CardTitle>

                <Progress
                    value={timePercentage}
                />
                <CardText className=' text-center'>
                    <i
                        className="bi bi-dash-circle-dotted me-4 fs-3"
                        role='button'
                        onMouseDown={decreaseTime}
                        onMouseUp={stopChangeTime}
                    ></i>
                    <span className='fs-1 fw-bolder'>{displayTime}</span>
                    <i
                        className="bi bi-plus-circle-dotted ms-4 fs-3"
                        role='button'
                        onMouseDown={increaseTime}
                        onMouseUp={stopChangeTime}
                    ></i>
                </CardText>
                <div className=' text-center  '>
                    <Button
                        color="white"
                        className="ms-2"
                        onClick={handleReset}
                    >
                        <i className="bi bi-arrow-counterclockwise fs-3"></i>
                    </Button>
                    <TimerButton
                        handleIsRuning={handleIsRuning}
                        isRuning={isRuning} />


                </div>

            </CardBody>
        </Card>
    )
}

export default TimerCard