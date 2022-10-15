import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const WaterCard = ({ increase, counter, decrease }) => {
    const cups = () => {
        let cup = []
        for (let index = 0; index < counter; index++) {
            //cup.push(<i className="bi bi-cup-straw" key={index}></i>)
            cup.push(
                <img
                    src='media/water-glass.png'
                    width={50}
                    height={50}
                    key={index}
                    onClick={decrease}
                    role='button'
                ></img>
            )
        }
        return cup
    }
    const emptycups = () => {
        if (counter < 8) {
            let cup = []

            for (let index = 0; index < 8 - counter; index++) {

                cup.push(
                    <img
                        role='button'
                        onClick={increase}
                        src='media/water-glass.png'
                        width={50}
                        height={50}
                        className='opacity-25'
                        key={index}
                        style={{ filter: "grayscale(100%)" }}
                    ></img>
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
                <CardText className='fs-1 fw-bolder'>
                    <b>{cups()}</b>
                    {emptycups()}

                    <i className="bi bi-plus " onClick={increase} role='button' ></i>

                </CardText>
                {/* <Button onClick={increase} color="primary" className='me-2'>
                    Increase cups
                </Button>
                <Button onClick={decrease} color="secondary" >
                    Decrease cups
                </Button> */}
            </CardBody>
        </Card>
    )
}

export default WaterCard