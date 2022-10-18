import { Button, Card, CardBody, CardTitle, CardText, Progress } from 'reactstrap';

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

const TimerCard = (
    {
        time,
        handleIsRuning,
        isRuning, handleReset,
        percentageToAlarm,
        increaseTime,
        decreaseTime,
        stopChangeTime
    }) => {
    return (
        <Card>
            <CardBody>
                <CardTitle className=' d-flex justify-content-between'>
                    <p className='fs-4 fw-bolder'>Timer</p>
                    <i className="bi bi-gear-fill text-muted mt-2" role="button"></i>
                </CardTitle>

                <Progress
                    value={percentageToAlarm}
                />
                <CardText className=' text-center'>
                    <i className="bi bi-dash-circle-dotted me-4 fs-3" role='button' onMouseDown={decreaseTime} onMouseUp={stopChangeTime}></i>
                    <span className='fs-1 fw-bolder'>{time}</span>
                    <i className="bi bi-plus-circle-dotted ms-4 fs-3" role='button' onMouseDown={increaseTime} onMouseUp={stopChangeTime}></i>
                </CardText>

                <TimerButton handleIsRuning={handleIsRuning} isRuning={isRuning} />
                <Button color="secondary" className="ms-2" onClick={handleReset}>RESET</Button>
            </CardBody>
        </Card>
    )
}

export default TimerCard