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
        <Card className='border-white'>
            <CardBody>
                <CardTitle  className=' d-flex justify-content-between '>
                    <p className='fs-4 fw-bolder'>Water Rate</p>
                    <p className='text-muted align-self-center '><span className='fw-bold'>1.5 L/</span>2.5 L</p>
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