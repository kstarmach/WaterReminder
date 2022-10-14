import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';

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
        <Card className='border-white'>
            <CardBody>
                <CardTitle className=' d-flex justify-content-between'>
                    <p className='fs-4 fw-bolder'>Timer</p>
                    <i className="bi bi-gear text-muted align-self-center" role="button"></i>
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

export default TimerCard