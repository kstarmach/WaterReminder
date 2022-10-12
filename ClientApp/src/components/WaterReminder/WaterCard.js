import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const WaterCard = ({ increase, counter, decrease }) => {
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
                <Button onClick={increase} color="primary" className='me-2'>
                    Increase cups
                </Button>
                <Button onClick={decrease} color="secondary" >
                    Decrease cups
                </Button>
            </CardBody>
        </Card>
    )
}

export default WaterCard