import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const WaterCard = ({ increase, counter, decrease }) => {
    const cups = () => {
        let cup = []
        for (let index = 0; index < counter; index++) {
            cup.push(
                <i
                    className="bi bi-droplet-fill fs-1 text-primary"
                    onClick={decrease}
                    key={index}
                    role='button'
                ></i>
            )
        }
        return cup
    }
    const emptycups = () => {
        let suggestedAmount = 12
        if (counter < suggestedAmount) {
            let cup = []

            for (let index = 0; index < suggestedAmount - counter; index++) {

                cup.push(

                    <i
                        className="bi bi-droplet-fill fs-1 text-muted opacity-25"
                        role='button'
                        key={index}
                        onClick={increase}
                    ></i>
                )
            }
            return cup
        }

    }



    return (
        <Card >
            <CardBody>
                <CardTitle className=' d-flex justify-content-between '>
                    <p className='fs-4 fw-bolder'>Water Rate</p>
                    <p className='text-muted align-self-center '><span className='fw-bold'>1.5 L/</span>2.5 L</p>
                </CardTitle>
                <CardText className='fs-2 fw-bolder'>
                    <b>{cups()}</b>
                    {emptycups()}

                    <i className="bi bi-plus " onClick={increase} role='button' ></i>

                </CardText>

            </CardBody>
        </Card>
    )
}

export default WaterCard